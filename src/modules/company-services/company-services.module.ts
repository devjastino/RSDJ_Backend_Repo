import { Module } from '@nestjs/common';
import { CompanyServicesService } from './company-services.service';
import { CompanyServicesController } from './company-services.controller';
import { ShuttleServicesModule } from './shuttle-services/shuttle-services.module';
import { VehicleServicesModule } from './vehicle-services/vehicle-services.module';

@Module({
  controllers: [CompanyServicesController],
  providers: [CompanyServicesService],
  imports: [ShuttleServicesModule, VehicleServicesModule],
})
export class CompanyServicesModule {}
