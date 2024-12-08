import { Body, Controller, Post, Res } from '@nestjs/common';
import { BillingServicesService } from './billing-services.service';
import { CreateBillingDto } from './dto/create-billing-services.dto';
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
}
