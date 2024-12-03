import { Controller } from '@nestjs/common';
import { CompanyServicesService } from './company-services.service';

@Controller('company-services')
export class CompanyServicesController {
  constructor(private readonly companyServicesService: CompanyServicesService) {}
}
