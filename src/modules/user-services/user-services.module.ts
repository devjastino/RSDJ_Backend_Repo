import { Module } from '@nestjs/common';
import { UserServicesService } from './user-services.service';
import { UserServicesController } from './user-services.controller';
import { User, UserSchema } from 'src/database/schemas/User.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserServicesController],
  providers: [UserServicesService],
  exports: [UserServicesService],
})
export class UserServicesModule {}
