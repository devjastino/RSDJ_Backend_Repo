import { Module } from '@nestjs/common';
import { ShuttleServicesService } from './shuttle-services.service';
import { ShuttleServicesController } from './shuttle-services.controller';

@Module({
  controllers: [ShuttleServicesController],
  providers: [ShuttleServicesService]
})
export class ShuttleServicesModule {}
