import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { SchedulingServicesService } from './scheduling-services.service';
import { ResponseDTO } from 'src/constants/response.dto';
import { Response, Request } from 'express';
import { CreateScheduleDto } from './dto/create-schedule-service.dto';
import { AuthGuard } from '../../constants/auth.guard';
@Controller('scheduling-services')
export class SchedulingServicesController {
  constructor(
    private readonly schedulingServicesService: SchedulingServicesService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createScheduleDto: CreateScheduleDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.schedulingServicesService.create(createScheduleDto);
    res.status(response.status).send(response);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAll(@Req() req: Request, @Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.schedulingServicesService.getAll();
    res.status(response.status).send(response);
  }

  @UseGuards(AuthGuard)
  @Get('get-details')
  async getAllDetails(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.schedulingServicesService.getAllDetails();
    res.status(response.status).send(response);
  }
}
