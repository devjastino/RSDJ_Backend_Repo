import {
  Controller,
  Body,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../authentication/auth.guard';
import { AuthServiceService } from './auth-service.service';

@Controller('auth-service')
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}


}
