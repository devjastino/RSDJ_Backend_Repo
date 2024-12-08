import { Module } from '@nestjs/common';
import { TextServicesService } from './text-services.service';
import { TextServicesController } from './text-services.controller';

@Module({
  controllers: [TextServicesController],
  providers: [TextServicesService]
})
export class TextServicesModule {}
