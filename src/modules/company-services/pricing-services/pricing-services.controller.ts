import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { PricingServicesService } from './pricing-services.service';
import { CreatePricingServicesDto } from './dto/create-pricing-services.dto';
import { Response } from 'express';
import { ResponseDTO } from 'src/constants/response.dto';

@Controller('pricing-services')
export class PricingServicesController {
  constructor(
    private readonly pricingServicesService: PricingServicesService,
  ) {}

  @Post()
  async create(
    @Body() createPricingServicesDto: CreatePricingServicesDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.pricingServicesService.create(createPricingServicesDto);
    res.status(response.status).send(response);
  }

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.pricingServicesService.getAll();
    res.status(response.status).send(response);
  }

  @Get(':id')
  async getOne(@Param() params: any, @Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.pricingServicesService.getOne(params.id);
    res.status(response.status).send(response);
  }
}
