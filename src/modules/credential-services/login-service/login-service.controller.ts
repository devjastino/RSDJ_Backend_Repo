import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash, compare } from 'bcrypt';
import { Model } from 'mongoose';
import { User } from 'src/database/schemas/User.schema';
import { RESPONSE } from 'src/utils/response.utils';
import { CreateLoginDto } from './dto/create-login-service.dto';
import { jwtConstants } from 'src/constants/jwt.constant';
import { sign } from 'jsonwebtoken';
import { CreateTokenDto } from './dto/create-token.dto';
import { LoginServiceService } from './login-service.service';
import { ResponseDTO } from 'src/constants/response.dto';
import { Response } from 'express';

@Controller('login')
export class LoginServiceController {
  constructor(private readonly loginServiceService: LoginServiceService) {}

  @Post()
  async create(@Body() createLoginDto: CreateLoginDto, @Res() res: Response) {
    let response: Awaited<ResponseDTO> = await this.loginServiceService.create(
      createLoginDto,
    );
    res.status(response.status).send(response);
  }
}
