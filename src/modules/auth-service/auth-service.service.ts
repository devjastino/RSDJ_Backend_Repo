import { Injectable } from '@nestjs/common';
import { UserServicesService } from '../user-services/user-services.service';

@Injectable()
export class AuthServiceService {
  constructor(private usersService: UserServicesService) {}
  async validateUser(id: string): Promise<any> {
    const user = await this.usersService.findOne(id);
    if (user.status == 200) {
      return user;
    }
    return null;
  }
}
