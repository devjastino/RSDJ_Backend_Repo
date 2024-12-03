import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Company=servicesService } from './company=services.service';
import { CreateCompany=serviceDto } from './dto/create-company=service.dto';
import { UpdateCompany=serviceDto } from './dto/update-company=service.dto';

@Controller('company=services')
export class Company=servicesController {
  constructor(private readonly company=servicesService: Company=servicesService) {}

  @Post()
  create(@Body() createCompany=serviceDto: CreateCompany=serviceDto) {
    return this.company=servicesService.create(createCompany=serviceDto);
  }

  @Get()
  findAll() {
    return this.company=servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.company=servicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompany=serviceDto: UpdateCompany=serviceDto) {
    return this.company=servicesService.update(+id, updateCompany=serviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.company=servicesService.remove(+id);
  }
}
