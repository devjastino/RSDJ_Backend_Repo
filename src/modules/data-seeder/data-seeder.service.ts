import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/database/schemas/User.schema';
import { hash } from 'bcrypt';
import { RESPONSE } from 'src/utils/response.utils';

@Injectable()
export class DataSeederService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createSeed() {
    try {
      let dataSeed: {
        username: string;
        password: string;
        email: string;
        user_type: string;
        position: string;
      } = {
        username: 'superadmin',
        password: 'Super_Admin1234',
        email: 'superadmin.rsdj@gmail.com',
        position: 'superadmin',
        user_type: 'superadmin',
      };

      const hashPassword: Awaited<string> = await hash(dataSeed.password, 10);
      dataSeed.password = hashPassword;

      let exist = await this.userModel.findOne({ username: dataSeed.username });
      if (exist == null) {
        let response = await this.userModel.create(dataSeed);
        return RESPONSE(HttpStatus.OK, response, 'Data seeded!');
      }
      return RESPONSE(HttpStatus.OK, {}, 'Already seeded!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Failed to seed data!');
    }
  }
}
