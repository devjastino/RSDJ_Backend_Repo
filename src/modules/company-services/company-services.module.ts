import { Module } from '@nestjs/common';
import { CompanyServicesService } from './company-services.service';
import { CompanyServicesController } from './company-services.controller';
import { BookingServicesController } from './booking-services/booking-services.controller';
import { BookingServicesService } from './booking-services/booking-services.service';
import { CarServicesModule } from './car-services/car-services.module';

@Module({
  imports: [CarServicesModule],
  controllers: [CompanyServicesController, BookingServicesController],
  providers: [CompanyServicesService, BookingServicesService],
})
export class CompanyServicesModule {}
