import { PartialType } from '@nestjs/mapped-types';
import { CreatePricingServicesDto } from './create-pricing-services.dto';

export class GetPricingServicesDto extends PartialType(
  CreatePricingServicesDto,
) {
  _id: string;
}
