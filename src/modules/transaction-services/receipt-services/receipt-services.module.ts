import { Module } from '@nestjs/common';
import { ReceiptServicesService } from './receipt-services.service';
import { ReceiptServicesController } from './receipt-services.controller';

@Module({
  controllers: [ReceiptServicesController],
  providers: [ReceiptServicesService]
})
export class ReceiptServicesModule {}
