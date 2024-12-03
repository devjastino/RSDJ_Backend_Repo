import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseDTO } from 'src/constants/response.dto';
import { Schedule } from 'src/database/schemas/Schedule.schema';
import { RESPONSE } from 'src/utils/response.utils';

@Injectable()
export class SchedulingServicesService {
  constructor(
    @InjectModel(Schedule.name) private scheduleModel: Model<Schedule>,
  ) {}

  async getAll(): Promise<ResponseDTO> {
    try {
      let response: Awaited<any[]> = await this.scheduleModel.find();
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No Schedules Yet!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
