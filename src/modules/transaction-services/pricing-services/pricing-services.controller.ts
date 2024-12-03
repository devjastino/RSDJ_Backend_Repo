import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PricingServicesService } from './pricing-services.service';
import { CreatePricingServiceDto } from './dto/create-pricing-service.dto';
import { UpdatePricingServiceDto } from './dto/update-pricing-service.dto';

@Controller('pricing-services')
export class PricingServicesController {
  constructor(private readonly pricingServicesService: PricingServicesService) {}

  @Post()
  create(@Body() createPricingServiceDto: CreatePricingServiceDto) {
    return this.pricingServicesService.create(createPricingServiceDto);
  }

  @Get()
  findAll() {
    return this.pricingServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pricingServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePricingServiceDto: UpdatePricingServiceDto) {
    return this.pricingServicesService.update(+id, updatePricingServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pricingServicesService.remove(+id);
  }
}
