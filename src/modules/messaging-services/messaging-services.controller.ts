import { Controller } from '@nestjs/common';
import { MessagingServicesService } from './messaging-services.service';

@Controller('messaging-services')
export class MessagingServicesController {
  constructor(private readonly messagingServicesService: MessagingServicesService) {}
}
