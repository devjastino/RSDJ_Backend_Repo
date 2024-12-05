import { Module } from '@nestjs/common';
import { CredentialServicesService } from './credential-services.service';
import { CredentialServicesController } from './credential-services.controller';
import { LoginServiceService } from './login-service/login-service.service';
import { LoginServiceController } from './login-service/login-service.controller';
import { RegistrationServiceController } from './registration-service/registration-service.controller';
import { RegistrationServiceService } from './registration-service/registration-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/database/schemas/User.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
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
