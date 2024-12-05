import { Controller, Get, Res } from '@nestjs/common';
import { CredentialServicesService } from './credential-services.service';
import { ResponseDTO } from 'src/constants/response.dto';
import { Response } from 'express';

@Controller('credential-services')
export class CredentialServicesController {
  constructor(
    private readonly credentialServicesService: CredentialServicesService,
  ) {}

  @Get()
  async getResponse(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.credentialServicesService.getResponse();
    res.status(response.status).send(response);
  }
}
