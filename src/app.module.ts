import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserServicesModule } from './modules/user-services/user-services.module';
import { DataSeederModule } from './modules/data-seeder/data-seeder.module';
import { CredentialServicesModule } from './modules/credential-services/credential-services.module';
import { CompanyServicesModule } from './modules/company-services/company-services.module';
import { SchedulingServicesModule } from './modules/scheduling-services/scheduling-services.module';
import { MessagingServicesModule } from './modules/messaging-services/messaging-services.module';
import { ConfigModule } from '@nestjs/config';
import { PaymentServicesModule } from './modules/payment-services/payment-services.module';
import { TransactionServicesModule } from './modules/transaction-services/transaction-services.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://joaquinjhannchrist:KbhkN3sgEDzvS4UU@rsdjdb.wplrn.mongodb.net/rsdj-db',
    ),
    ConfigModule.forRoot(),
    CredentialServicesModule,
    UserServicesModule,
    DataSeederModule,
    CompanyServicesModule,
    SchedulingServicesModule,
    MessagingServicesModule,
    PaymentServicesModule,
    TransactionServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
