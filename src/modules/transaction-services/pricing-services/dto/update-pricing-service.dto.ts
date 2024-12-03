import { PartialType } from '@nestjs/mapped-types';
import { CreatePricingServiceDto } from './create-pricing-service.dto';

export class UpdatePricingServiceDto extends PartialType(CreatePricingServiceDto) {}
