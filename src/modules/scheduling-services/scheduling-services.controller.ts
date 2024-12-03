import { Controller, Get, Res } from '@nestjs/common';
import { SchedulingServicesService } from './scheduling-services.service';
import { ResponseDTO } from 'src/constants/response.dto';
import { Response } from 'express';

@Controller('scheduling-services')
export class SchedulingServicesController {
  constructor(
    private readonly schedulingServicesService: SchedulingServicesService,
  ) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.schedulingServicesService.getAll();
    res.status(response.status).send(response);
  }
}
