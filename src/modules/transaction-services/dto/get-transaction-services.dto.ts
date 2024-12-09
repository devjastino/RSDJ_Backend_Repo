import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionServiceDto } from './create-transaction-service.dto';

export class GetTransactionServicesDto extends PartialType(
  CreateTransactionServiceDto,
) {
  _id: string;
}
