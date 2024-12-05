import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegistrationServiceService } from './registration-service.service';
import { ResponseDTO } from 'src/constants/response.dto';
import { CreateRegistrationDto } from './dto/create-registration-service.dto';
import { Response } from 'express';

@Controller('registration')
export class RegistrationServiceController {
  constructor(
    private readonly registrationServiceService: RegistrationServiceService,
  ) {}

  @Post()
  async create(
    @Body() createRegistrationDto: CreateRegistrationDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.registrationServiceService.create(createRegistrationDto);
    res.status(response.status).send(response);
  }
}
