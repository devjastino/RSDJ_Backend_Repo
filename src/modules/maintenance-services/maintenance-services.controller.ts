import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaintenanceServicesService } from './maintenance-services.service';
import { CreateMaintenanceServiceDto } from './dto/create-maintenance-service.dto';
import { UpdateMaintenanceServiceDto } from './dto/update-maintenance-service.dto';

@Controller('maintenance-services')
export class MaintenanceServicesController {
  constructor(private readonly maintenanceServicesService: MaintenanceServicesService) {}

  @Post()
  create(@Body() createMaintenanceServiceDto: CreateMaintenanceServiceDto) {
    return this.maintenanceServicesService.create(createMaintenanceServiceDto);
  }

  @Get()
  findAll() {
    return this.maintenanceServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maintenanceServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaintenanceServiceDto: UpdateMaintenanceServiceDto) {
    return this.maintenanceServicesService.update(+id, updateMaintenanceServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maintenanceServicesService.remove(+id);
  }
}
