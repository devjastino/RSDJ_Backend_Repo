import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthServiceService } from 'src/modules/auth-service/auth-service.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthServiceService) {
    super();
  }

  async validate(id: string): Promise<any> {
    const user = await this.authService.validateUser(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
