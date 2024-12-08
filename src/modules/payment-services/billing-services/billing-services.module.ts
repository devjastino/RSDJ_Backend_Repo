import { Module } from '@nestjs/common';
import { BillingServicesService } from './billing-services.service';
import { BillingServicesController } from './billing-services.controller';

@Module({
  controllers: [BillingServicesController],
  providers: [BillingServicesService]
})
export class BillingServicesModule {}
