import { HttpStatus, Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { RESPONSE } from 'src/utils/response.utils';
import { CreateEmailServiceDto } from './dto/create-email-services.dto';
import { ResponseDTO } from 'src/constants/response.dto';

@Injectable()
export class EmailServicesService {
  constructor() {}

  async createEmail(
    createEmailServiceDto: CreateEmailServiceDto,
  ): Promise<ResponseDTO> {
    try {
      const transporter = await createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
          user: 'joaquinjhannchrist@gmail.com',
          pass: 'esxj tkrq beya ezea',
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      let sendMessage = await transporter.sendMail({
        from: createEmailServiceDto.from,
        to: createEmailServiceDto.to,
        subject: createEmailServiceDto.subject,
        text: createEmailServiceDto.text,
        html: createEmailServiceDto.html,
      });
      return RESPONSE(HttpStatus.OK, {}, 'Message Sent');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
