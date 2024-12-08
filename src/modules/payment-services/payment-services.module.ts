import { Module } from '@nestjs/common';
import { PaymentServicesService } from './payment-services.service';
import { PaymentServicesController } from './payment-services.controller';
import { BillingServicesModule } from './billing-services/billing-services.module';

@Module({
  controllers: [PaymentServicesController],
  providers: [PaymentServicesService],
  imports: [BillingServicesModule]
})
export class PaymentServicesModule {}
