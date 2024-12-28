import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationPricingDto } from './create-location-pricing.dto';

export class GetLocationPricingDto extends PartialType(
  CreateLocationPricingDto,
) {
  _id: string;
}
