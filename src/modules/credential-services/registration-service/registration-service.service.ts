import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/database/schemas/User.schema';
import { RESPONSE } from 'src/utils/response.utils';
import { CreateRegistrationDto } from './dto/create-registration-service.dto';
import { hash } from 'bcrypt';
import { GetRegistrationDto } from './dto/get-registration-service.dto';

@Injectable()
export class RegistrationServiceService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createRegistrationDto: CreateRegistrationDto) {
    try {
      let exists: Awaited<GetRegistrationDto | null> =
        await this.userModel.findOne({
          $or: [
            { username: createRegistrationDto.username },
            { email: createRegistrationDto.email },
          ],
        });

      if (exists !== null) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Already Exists!');
      }

      const hashPassword: Awaited<string> = await hash(
        createRegistrationDto.password,
        10,
      );
      createRegistrationDto.password = hashPassword;

      let response: Awaited<GetRegistrationDto | null> =
        await this.userModel.create(createRegistrationDto);

      if (response == null) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Does not Created!!');
      }

      return RESPONSE(HttpStatus.CREATED, response, 'Created!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
