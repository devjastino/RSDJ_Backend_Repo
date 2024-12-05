import { Module } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { UserServicesModule } from '../user-services/user-services.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/jwt.constant';

@Module({
  imports: [
    UserServicesModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
  ],
  providers: [AuthServiceService],
  exports: [AuthServiceService],
})
export class AuthServiceModule {}
