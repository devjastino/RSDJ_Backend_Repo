import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarServicesService } from './car-services.service';
import { CreateCarServiceDto } from './dto/create-car-service.dto';
import { UpdateCarServiceDto } from './dto/update-car-service.dto';

@Controller('car-services')
export class CarServicesController {
  constructor(private readonly carServicesService: CarServicesService) {}

  @Post()
  create(@Body() createCarServiceDto: CreateCarServiceDto) {
    return this.carServicesService.create(createCarServiceDto);
  }

  @Get()
  findAll() {
    return this.carServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarServiceDto: UpdateCarServiceDto) {
    return this.carServicesService.update(+id, updateCarServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carServicesService.remove(+id);
  }
}
