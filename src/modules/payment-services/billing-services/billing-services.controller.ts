import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { BillingServicesService } from './billing-services.service';
import {
  CreateBillingDto,
  CreateBillingWithEmailDto,
} from './dto/create-billing-services.dto';
import { Response } from 'express';
import { ResponseDTO } from 'src/constants/response.dto';

@Controller('billing-services')
export class BillingServicesController {
  constructor(
    private readonly billingServicesService: BillingServicesService,
  ) {}

  @Post()
  async createBilling(
    @Body() createBillingDto: CreateBillingDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.billingServicesService.createBilling(createBillingDto);
    res.status(response.status).send(response);
  }

  @Get('get-payment-info/:id')
  async getPaymentInfo(
    @Param() params: any,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.billingServicesService.getPaymentInfo(params.id);
    res.status(response.status).send(response);
  }

  @Get('get-payment-sessions')
  async getAllPaymentSessions(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.billingServicesService.getAllPaymentSessions();
    res.status(response.status).send(response);
  }

  @Post('pay-later')
  async payLater(
    @Body() createBillingWithEmailDto: CreateBillingWithEmailDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.billingServicesService.payLater(createBillingWithEmailDto);
    res.status(response.status).send(response);
  }

  @Get('get-payment-success')
  async paymentSuccess(
    @Query() query: any,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.billingServicesService.paymentSuccess(query.session_id);
    res.status(response.status).send(response);
  }
}
