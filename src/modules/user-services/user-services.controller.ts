import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserServicesService } from './user-services.service';
import { CreateUserServiceDto } from './dto/create-user-service.dto';
import { UpdateUserServiceDto } from './dto/update-user-service.dto';

@Controller('user-services')
export class UserServicesController {
  constructor(private readonly userServicesService: UserServicesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userServicesService.findOne(id);
  }
}
