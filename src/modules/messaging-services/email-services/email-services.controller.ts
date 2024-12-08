import { Body, Controller, Post, Res } from '@nestjs/common';
import { EmailServicesService } from './email-services.service';
import { CreateEmailServiceDto } from './dto/create-email-services.dto';
import { Response } from 'express';
import { ResponseDTO } from 'src/constants/response.dto';

@Controller('email-services')
export class EmailServicesController {
  constructor(private readonly emailServicesService: EmailServicesService) {}

  @Post()
  async createEmail(
    @Body() createEmailServiceDto: CreateEmailServiceDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.emailServicesService.createEmail(createEmailServiceDto);
    res.status(response.status).send(response);
  }
}
