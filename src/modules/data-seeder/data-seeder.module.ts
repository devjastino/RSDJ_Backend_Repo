import { Module } from '@nestjs/common';
import { DataSeederService } from './data-seeder.service';
import { DataSeederController } from './data-seeder.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/database/schemas/User.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [DataSeederController],
  providers: [DataSeederService]
})
export class DataSeederModule {}
