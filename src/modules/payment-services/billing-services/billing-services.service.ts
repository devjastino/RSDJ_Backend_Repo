import { HttpStatus, Injectable } from '@nestjs/common';
import { RESPONSE } from 'src/utils/response.utils';
import Stripe from 'stripe';
import { CreateBillingDto } from './dto/create-billing-services.dto';
import { ResponseDTO } from 'src/constants/response.dto';
const SECRET_KEY =
  'sk_test_51QTlmrBOcE8ysnvUliBphu4iHnJ3AUmEH54cnj7EpRHM12VOyWfAE7Qcjv0kpPYUAMPyJf9mNCMmeFePkdryiz8h00X5sPNNeI';
const stripe: Stripe = new Stripe(process.env.SECRET_KEY || SECRET_KEY);

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
        success_url: 'http://localhost:3000',
        cancel_url: 'http://localhost:3000',
      });
      console.log(session);
      if (session == null) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Error!');
      }
      return RESPONSE(HttpStatus.CREATED, session, 'OK!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getPaymentInfo() {
    try {
      var charge = await stripe.charges.retrieve(
        'ch_3LiiC52eZvKYlo2C1da66ZSQ',
        {
          apiKey: SECRET_KEY,
        },
      );
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
