import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserServiceDto } from './dto/create-user-service.dto';
import { UpdateUserServiceDto } from './dto/update-user-service.dto';
import { User } from 'src/database/schemas/User.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetUserServiceDto } from './dto/get-user-service.dto';
import { RESPONSE } from 'src/utils/response.utils';
import { ResponseDTO } from 'src/constants/response.dto';

@Injectable()
export class UserServicesService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(id: string): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetUserServiceDto | null> =
        await this.userModel.findOne({ _id: id });
      if (response == null) {
        return RESPONSE(HttpStatus.NOT_FOUND, {}, 'Not Found!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
