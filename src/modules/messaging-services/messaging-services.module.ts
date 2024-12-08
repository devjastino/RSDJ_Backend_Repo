import { Module } from '@nestjs/common';
import { MessagingServicesService } from './messaging-services.service';
import { MessagingServicesController } from './messaging-services.controller';
import { EmailServicesModule } from './email-services/email-services.module';
import { TextServicesModule } from './text-services/text-services.module';

@Module({
  controllers: [MessagingServicesController],
  providers: [MessagingServicesService],
  imports: [EmailServicesModule, TextServicesModule],
})
export class MessagingServicesModule {}
