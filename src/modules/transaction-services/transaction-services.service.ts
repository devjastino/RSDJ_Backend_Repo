import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransactionServiceDto } from './dto/create-transaction-service.dto';
import { UpdateTransactionServiceDto } from './dto/update-transaction-service.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from 'src/database/schemas/Transaction.schema';
import { Model } from 'mongoose';
import { RESPONSE } from 'src/utils/response.utils';
import { GetTransactionServicesDto } from './dto/get-transaction-services.dto';

@Injectable()
export class TransactionServicesService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}

  async create(createTransactionServiceDto: CreateTransactionServiceDto) {
    try {
      let response = await this.transactionModel.create(
        createTransactionServiceDto,
      );
      if (response == null) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Error!');
      }
      return RESPONSE(HttpStatus.CREATED, response, 'Created!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async transactionUpdate(
    session_id: string,
    updateTransactionServiceDto: UpdateTransactionServiceDto,
  ) {
    try {
      let findSession: Awaited<GetTransactionServicesDto> =
        await this.transactionModel.findOne({
          transaction_reference_id: session_id,
        });
      if (findSession == null) {
        return RESPONSE(HttpStatus.NOT_FOUND, {}, 'No Transaction Found!');
      }
      await this.transactionModel.updateOne(
        {
          transaction_reference_id: session_id,
        },
        updateTransactionServiceDto,
      );
      return RESPONSE(HttpStatus.OK, {}, 'Updated!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
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
