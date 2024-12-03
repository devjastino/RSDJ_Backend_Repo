import { Module } from '@nestjs/common';
import { Company=servicesService } from './company=services.service';
import { Company=servicesController } from './company=services.controller';

@Module({
  controllers: [Company=servicesController],
  providers: [Company=servicesService]
})
export class Company=servicesModule {}
