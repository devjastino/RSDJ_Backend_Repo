import { Module } from '@nestjs/common';
import { SchedulingServicesService } from './scheduling-services.service';
import { SchedulingServicesController } from './scheduling-services.controller';
import { MongooseModule } from '@nestjs/mongoose'; 
import { Schedule, ScheduleSchema } from 'src/database/schemas/Schedule.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Schedule.name, schema: ScheduleSchema }])],
  controllers: [SchedulingServicesController],
  providers: [SchedulingServicesService],
})
export class SchedulingServicesModule {}
