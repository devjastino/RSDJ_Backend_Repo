import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { SchedulingServicesService } from './scheduling-services.service';
import { ResponseDTO } from 'src/constants/response.dto';
import { Response } from 'express';
import { CreateScheduleDto } from './dto/create-schedule-service.dto';

@Controller('scheduling-services')
export class SchedulingServicesController {
  constructor(
    private readonly schedulingServicesService: SchedulingServicesService,
  ) {}

  @Post()
  async create(
    @Body() createScheduleDto: CreateScheduleDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.schedulingServicesService.create(createScheduleDto);
    res.status(response.status).send(response);
  }

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.schedulingServicesService.getAll();
    res.status(response.status).send(response);
  }

  @Get('get-details')
  async getAllDetails(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.schedulingServicesService.getAllDetails();
    res.status(response.status).send(response);
  }
}
