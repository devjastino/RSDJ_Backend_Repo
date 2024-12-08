import { Module } from '@nestjs/common';
import { EmailServicesService } from './email-services.service';
import { EmailServicesController } from './email-services.controller';

@Module({
  controllers: [EmailServicesController],
  providers: [EmailServicesService]
})
export class EmailServicesModule {}
