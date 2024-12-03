import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentServicesService } from './payment-services.service';
import { CreatePaymentServiceDto } from './dto/create-payment-service.dto';
import { UpdatePaymentServiceDto } from './dto/update-payment-service.dto';

@Controller('payment-services')
export class PaymentServicesController {
  constructor(private readonly paymentServicesService: PaymentServicesService) {}

  @Post()
  create(@Body() createPaymentServiceDto: CreatePaymentServiceDto) {
    return this.paymentServicesService.create(createPaymentServiceDto);
  }

  @Get()
  findAll() {
    return this.paymentServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentServiceDto: UpdatePaymentServiceDto) {
    return this.paymentServicesService.update(+id, updatePaymentServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentServicesService.remove(+id);
  }
}
