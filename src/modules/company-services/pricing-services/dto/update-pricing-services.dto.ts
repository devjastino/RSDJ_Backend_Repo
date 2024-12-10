import { PartialType } from '@nestjs/mapped-types';
import { CreatePricingServicesDto } from './create-pricing-services.dto';

export class UpdatePricingServicesDto extends PartialType(
  CreatePricingServicesDto,
) {}
