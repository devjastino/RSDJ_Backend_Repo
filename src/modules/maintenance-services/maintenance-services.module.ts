import { Module } from '@nestjs/common';
import { MaintenanceServicesService } from './maintenance-services.service';
import { MaintenanceServicesController } from './maintenance-services.controller';

@Module({
  controllers: [MaintenanceServicesController],
  providers: [MaintenanceServicesService]
})
export class MaintenanceServicesModule {}
