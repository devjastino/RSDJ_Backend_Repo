import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TextServicesService } from './text-services.service';
import { CreateTextServiceDto } from './dto/create-text-service.dto';
import { UpdateTextServiceDto } from './dto/update-text-service.dto';

@Controller('text-services')
export class TextServicesController {
  constructor(private readonly textServicesService: TextServicesService) {}

  @Post()
  create(@Body() createTextServiceDto: CreateTextServiceDto) {
    return this.textServicesService.create(createTextServiceDto);
  }

  @Get()
  findAll() {
    return this.textServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextServiceDto: UpdateTextServiceDto) {
    return this.textServicesService.update(+id, updateTextServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textServicesService.remove(+id);
  }
}
