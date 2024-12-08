import { Module } from '@nestjs/common';
import { TransactionServicesService } from './transaction-services.service';
import { TransactionServicesController } from './transaction-services.controller';
import { PricingServicesModule } from './pricing-services/pricing-services.module';
import { ReceiptServicesModule } from './receipt-services/receipt-services.module';

@Module({
  controllers: [TransactionServicesController],
  providers: [TransactionServicesService],
  imports: [PricingServicesModule, ReceiptServicesModule]
})
export class TransactionServicesModule {}
