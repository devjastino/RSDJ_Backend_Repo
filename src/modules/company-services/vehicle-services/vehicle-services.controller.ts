import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
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

  @Get('get-all')
  async getAllVehicles(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.vehicleServicesService.getAllVehicles();
    res.status(response.status).send(response);
  }

  @Get('get-all-with-info')
  async getAllVehiclesWithInfo(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.vehicleServicesService.getAllVehiclesWithInfo();
    res.status(response.status).send(response);
  }

  @Get('get-by-query/:id')
  async getVehicleByQuery(
    @Param() params: any,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.vehicleServicesService.getVehicleByQuery(params.id);
    res.status(response.status).send(response);
  }
}
