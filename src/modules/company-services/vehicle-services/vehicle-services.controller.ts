import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { VehicleServicesService } from './vehicle-services.service';
import { ResponseDTO } from 'src/constants/response.dto';
import { Response } from 'express';
import { CreateVehicleDto } from './dto/create-vehicle-service.dto';

@Controller('vehicle-services')
export class VehicleServicesController {
  constructor(
    private readonly vehicleServicesService: VehicleServicesService,
  ) {}

  @Post()
  async create(
    @Body() createVechicleDto: CreateVehicleDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.vehicleServicesService.create(createVechicleDto);
    res.status(response.status).send(response);
  }

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.vehicleServicesService.getAll();
    res.status(response.status).send(response);
  }

  @Get("get-all")
  async getAllVehicles(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.vehicleServicesService.getAllVehicles();
    res.status(response.status).send(response);
  }
}
