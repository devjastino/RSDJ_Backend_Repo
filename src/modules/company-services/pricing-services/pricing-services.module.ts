import { Module } from '@nestjs/common';
import { PricingServicesService } from './pricing-services.service';
import { PricingServicesController } from './pricing-services.controller';

@Module({
  controllers: [PricingServicesController],
  providers: [PricingServicesService]
})
export class PricingServicesModule {}
