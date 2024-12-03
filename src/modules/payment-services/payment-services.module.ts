import { Module } from '@nestjs/common';
import { PaymentServicesService } from './payment-services.service';
import { PaymentServicesController } from './payment-services.controller';

@Module({
  controllers: [PaymentServicesController],
  providers: [PaymentServicesService]
})
export class PaymentServicesModule {}
