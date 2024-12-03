import { Controller } from '@nestjs/common';
import { ShuttleServicesService } from './shuttle-services.service';

@Controller('shuttle-services')
export class ShuttleServicesController {
  constructor(private readonly shuttleServicesService: ShuttleServicesService) {}
}
