import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Model } from 'mongoose';
import { jwtConstants } from 'src/constants/jwt.constant';
import { User } from 'src/database/schemas/User.schema';
import { RESPONSE } from 'src/utils/response.utils';
import { CreateLoginDto } from './dto/create-login-service.dto';
import { CreateTokenDto } from './dto/create-token.dto';

@Injectable()
export class LoginServiceService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createLoginDto: CreateLoginDto) {
    try {
      let exists: Awaited<any | null> = await this.userModel
        .findOne({
          $or: [
            { username: createLoginDto.login },
            { email: createLoginDto.login },
          ],
        })
        .select({ _id: 1, password: 1, email: 1 });

      if (exists == null) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Does not exists!');
      }

      let comparePassword: boolean = await compare(
        createLoginDto.password,
        exists.password,
      );

      if (!comparePassword) {
        return RESPONSE(
          HttpStatus.BAD_REQUEST,
          {},
          'Password does not matched!',
        );
      }

      let accessToken: string = await sign(
        { _id: exists._id },
        jwtConstants.secret,
        {
          expiresIn: '1d',
        },
      );

      let refreshToken: string = await sign(
        JSON.parse(JSON.stringify(exists)),
        jwtConstants.secret,
        {
          expiresIn: '60d',
        },
      );

      let tokens: CreateTokenDto = {
        accessToken: accessToken,
        refreshToken: refreshToken,
      };

      return RESPONSE(HttpStatus.CREATED, tokens, 'Login Successfully!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
