import { Injectable } from '@nestjs/common';
import { UserServicesService } from '../user-services/user-services.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServiceService {
  constructor(
    private usersService: UserServicesService,
    private jwtService: JwtService,
  ) {}
  async validateUser(id: string): Promise<any> {
    const user = await this.usersService.findOne(id);
    if (user.status == 200) {
      return user;
    }
    return null;
  }
}
