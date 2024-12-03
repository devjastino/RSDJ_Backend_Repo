import { Injectable } from '@nestjs/common';
import { CreateTransactionServiceDto } from './dto/create-transaction-service.dto';
import { UpdateTransactionServiceDto } from './dto/update-transaction-service.dto';

@Injectable()
export class TransactionServicesService {
  create(createTransactionServiceDto: CreateTransactionServiceDto) {
    return 'This action adds a new transactionService';
  }

  findAll() {
    return `This action returns all transactionServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionService`;
  }

  update(id: number, updateTransactionServiceDto: UpdateTransactionServiceDto) {
    return `This action updates a #${id} transactionService`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionService`;
  }
}
