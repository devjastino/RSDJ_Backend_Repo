import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentServiceDto } from './create-payment-service.dto';

export class UpdatePaymentServiceDto extends PartialType(CreatePaymentServiceDto) {}
