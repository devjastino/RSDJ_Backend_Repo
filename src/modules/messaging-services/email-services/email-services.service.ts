import { HttpStatus, Injectable } from '@nestjs/common';
import { createTransport, SentMessageInfo, Transporter } from 'nodemailer';
import { RESPONSE } from 'src/utils/response.utils';
import { CreateEmailServiceDto } from './dto/create-email-services.dto';
import { ResponseDTO } from 'src/constants/response.dto';
import * as fs from 'fs';
import { promisify } from 'util';
import * as path from 'path';
const readFileAsync = promisify(fs.readFile);

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

      // let filePath: string = path.resolve(__dirname, 'template/', 'email.html');

      // let htmlTemplate = await filePath.replace('dist', 'src');

      // const htmlTemplatePath: string = await readFileAsync(
      //   htmlTemplate,
      //   'utf-8',
      // );

      let sendMessage = await transporter.sendMail({
        from: createEmailServiceDto.from,
        to: createEmailServiceDto.to,
        subject: createEmailServiceDto.subject,
        text: createEmailServiceDto.text,
        html: createEmailServiceDto.html,
        // html: htmlTemplatePath,
      });
      return RESPONSE(HttpStatus.OK, {}, 'Message Sent');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
