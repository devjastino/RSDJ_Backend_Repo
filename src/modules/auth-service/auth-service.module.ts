import { Module } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { UserServicesModule } from '../user-services/user-services.module';

@Module({
  imports: [UserServicesModule],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
