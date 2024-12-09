import { Module } from '@nestjs/common';
import { TransactionServicesService } from './transaction-services.service';
import { TransactionServicesController } from './transaction-services.controller';
import { PricingServicesModule } from './pricing-services/pricing-services.module';
import { ReceiptServicesModule } from './receipt-services/receipt-services.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Transaction,
  TransactionSchema,
} from 'src/database/schemas/Transaction.schema';

@Module({
  controllers: [TransactionServicesController],
  providers: [TransactionServicesService],
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
    PricingServicesModule,
    ReceiptServicesModule,
  ],
})
export class TransactionServicesModule {}
