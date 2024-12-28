import { Module } from '@nestjs/common';
import { LocationPricingService } from './location-pricing.service';
import { LocationPricingController } from './location-pricing.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LocationPriceRate,
  LocationPriceRateSchema,
} from 'src/database/schemas/LocationPriceRate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LocationPriceRate.name, schema: LocationPriceRateSchema },
    ]),
  ],
  controllers: [LocationPricingController],
  providers: [LocationPricingService],
})
export class LocationPricingModule {}
