import { HttpStatus, Injectable } from '@nestjs/common';
import { RESPONSE } from 'src/utils/response.utils';
import Stripe from 'stripe';
import {
  CreateBillingDto,
  CreateBillingWithEmailDto,
} from './dto/create-billing-services.dto';
import { ResponseDTO } from 'src/constants/response.dto';
import { GET, POST, PUT } from 'src/utils/fetch.utils';
const SECRET_KEY =
  'sk_test_51QTlmrBOcE8ysnvUliBphu4iHnJ3AUmEH54cnj7EpRHM12VOyWfAE7Qcjv0kpPYUAMPyJf9mNCMmeFePkdryiz8h00X5sPNNeI';
const stripe: Stripe = new Stripe(process.env.SECRET_KEY || SECRET_KEY);
const API = 'http://192.168.254.105:3000/';

@Injectable()
export class BillingServicesService {
  async createBilling(
    createBillingDto: CreateBillingDto,
  ): Promise<ResponseDTO> {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'PHP',
              product_data: {
                name: createBillingDto.product_data.name,
                description: createBillingDto.product_data.description,
              },
              unit_amount: createBillingDto.price * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${API}billing-services/get-payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: API,
      });
      if (session == null) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Error!');
      }
      return RESPONSE(HttpStatus.CREATED, session, 'OK!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getPaymentInfo(id: string): Promise<ResponseDTO> {
    try {
      let session = await stripe.checkout.sessions.retrieve(id, {
        apiKey: SECRET_KEY,
      });
      return RESPONSE(HttpStatus.OK, session, '');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getAllPaymentSessions(): Promise<ResponseDTO> {
    try {
      let session = await stripe.checkout.sessions.list(
        { limit: 10 },
        {
          apiKey: SECRET_KEY,
        },
      );
      console.log(session);
      return RESPONSE(HttpStatus.OK, session, '');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async payLater(createBillingDto: CreateBillingWithEmailDto) {
    try {
      let getProductInfo: Awaited<ResponseDTO | any> = await GET(
        API,
        `vehicle-services/get-by-query/${createBillingDto.product_data.name}`,
      );

      if (getProductInfo.status == 200) {
        createBillingDto.product_data.name =
          getProductInfo.response.response.vehicle_name;
        createBillingDto.product_data.description = Object.values(
          getProductInfo.response.response,
        ).toString();
      }

      let requestPayment: Awaited<ResponseDTO | any> = await this.createBilling(
        createBillingDto,
      );

      let transactionConfig: {
        transaction_price: number;
        transaction_reference_id: string;
        user_id: string;
        transaction_status: string;
        transaction_type: string;
      } = {
        transaction_price: createBillingDto.price,
        transaction_reference_id: requestPayment.response.id,
        user_id: createBillingDto.user_id,
        transaction_status: requestPayment.response.payment_status,
        transaction_type: 'PAY_LATER',
      };

      let createTransaction: Awaited<ResponseDTO | any> = await POST(
        API,
        'transaction-services',
        transactionConfig,
        '',
      );

      let emailConfig = {
        from: 'joaquinjhannchrist@gmail.com',
        to: createBillingDto.email,
        subject: 'Payment',
        html: `<div style='display:flex; flex-direction:column; color:white; background-color:black; height:100vh;'>
            <h1 style='flex:100%;'>${'THANK YOU FOR AVAILING OUR SERVICE!'}</h1>
            <p>We’re happy to let you know that the booking from your transaction ref: <span style="font-weight:bold;"> ${
              createTransaction.response.response._id
            } </span> has been processed. Thank you for availing our service. Have a nice trip!</p>
            <p>You may pay from the link below:</p>
            <p>
              <a href=${requestPayment.response?.url}>${
          requestPayment.response?.url
        }</a>
            </p>
          </div>`,
      };
      if (requestPayment.status !== 201) {
        return requestPayment;
      }
      let requestEmail: Awaited<ResponseDTO> = await POST(
        API,
        'email-services',
        emailConfig,
        '',
      );
      return requestEmail.response;
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async paymentSuccess(id: string) {
    try {
      let getPaymentInfo: Awaited<ResponseDTO | any> =
        await this.getPaymentInfo(id);
      if (getPaymentInfo?.response?.payment_status == 'paid') {
        await PUT(
          API,
          `transaction-services/update-success/${id}`,
          {
            transaction_status: 'PAID',
            payment_date: Date.now(),
          },
          '',
        );
      }
      return getPaymentInfo;
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}