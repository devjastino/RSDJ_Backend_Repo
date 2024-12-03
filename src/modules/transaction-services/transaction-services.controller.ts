import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionServicesService } from './transaction-services.service';
import { CreateTransactionServiceDto } from './dto/create-transaction-service.dto';
import { UpdateTransactionServiceDto } from './dto/update-transaction-service.dto';

@Controller('transaction-services')
export class TransactionServicesController {
  constructor(private readonly transactionServicesService: TransactionServicesService) {}

  @Post()
  create(@Body() createTransactionServiceDto: CreateTransactionServiceDto) {
    return this.transactionServicesService.create(createTransactionServiceDto);
  }

  @Get()
  findAll() {
    return this.transactionServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionServiceDto: UpdateTransactionServiceDto) {
    return this.transactionServicesService.update(+id, updateTransactionServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionServicesService.remove(+id);
  }
}
