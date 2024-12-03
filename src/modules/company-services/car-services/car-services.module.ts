import { Module } from '@nestjs/common';
import { CarServicesService } from './car-services.service';
import { CarServicesController } from './car-services.controller';

@Module({
  controllers: [CarServicesController],
  providers: [CarServicesService]
})
export class CarServicesModule {}
