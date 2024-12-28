import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationPricingDto } from './create-location-pricing.dto';

export class UpdateLocationPricingDto extends PartialType(CreateLocationPricingDto) {}
