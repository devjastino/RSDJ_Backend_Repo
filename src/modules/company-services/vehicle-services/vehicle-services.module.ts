import { Module } from '@nestjs/common';
import { VehicleServicesService } from './vehicle-services.service';
import { VehicleServicesController } from './vehicle-services.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from 'src/database/schemas/Vehicle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [VehicleServicesController],
  providers: [VehicleServicesService],
})
export class VehicleServicesModule {}
