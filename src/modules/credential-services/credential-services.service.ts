import { Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/constants/response.dto';
import { RESPONSE } from 'src/utils/response.utils';

@Injectable()
export class CredentialServicesService {
  async getResponse(): Promise<ResponseDTO> {
    return RESPONSE(200, {}, 'Connected to Credential Service!');
  }
}
