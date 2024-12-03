import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionServiceDto } from './create-transaction-service.dto';

export class UpdateTransactionServiceDto extends PartialType(CreateTransactionServiceDto) {}
