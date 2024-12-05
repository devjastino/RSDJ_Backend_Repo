import { Module } from '@nestjs/common';
import { CredentialServicesService } from './credential-services.service';
import { CredentialServicesController } from './credential-services.controller';
import { LoginServiceService } from './login-service/login-service.service';
import { LoginServiceController } from './login-service/login-service.controller';
import { RegistrationServiceController } from './registration-service/registration-service.controller';
import { RegistrationServiceService } from './registration-service/registration-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/database/schemas/User.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/jwt.constant';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
  ],
  controllers: [
    CredentialServicesController,
    LoginServiceController,
    RegistrationServiceController,
  ],
  providers: [
    CredentialServicesService,
    LoginServiceService,
    RegistrationServiceService,
  ],
})
export class CredentialServicesModule {}
