import { Module } from '@nestjs/common';
import { PricingServicesService } from './pricing-services.service';
import { PricingServicesController } from './pricing-services.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pricing, PricingSchema } from 'src/database/schemas/Pricing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pricing.name, schema: PricingSchema }]),
  ],
  controllers: [PricingServicesController],
  providers: [PricingServicesService],
})
export class PricingServicesModule {}
