import { Controller } from '@nestjs/common';
import { PricingServicesService } from './pricing-services.service';

@Controller('pricing-services')
export class PricingServicesController {
  constructor(private readonly pricingServicesService: PricingServicesService) {}
}
