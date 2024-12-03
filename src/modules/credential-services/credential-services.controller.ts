import { Controller } from '@nestjs/common';
import { CredentialServicesService } from './credential-services.service';

@Controller('credential-services')
export class CredentialServicesController {
  constructor(private readonly credentialServicesService: CredentialServicesService) {}
}
