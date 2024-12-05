import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseDTO } from 'src/constants/response.dto';
import { Schedule } from 'src/database/schemas/Schedule.schema';
import { RESPONSE } from 'src/utils/response.utils';
import { CreateScheduleDto } from './dto/create-schedule-service.dto';
import { tz } from 'moment-timezone';

@Injectable()
export class SchedulingServicesService {
  constructor(
    @InjectModel(Schedule.name) private scheduleModel: Model<Schedule>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<ResponseDTO> {
    try {
      createScheduleDto.from = await tz(
        `${createScheduleDto.from}`,
        'Asia/Manila',
      ).toDate();

      createScheduleDto.to = await tz(
        `${createScheduleDto.to}`,
        'Asia/Manila',
      ).toDate();

      let exists: number = await this.scheduleModel.countDocuments({
        vehicle_id: createScheduleDto.vehicle_id,
        $and: [
          { from: { $gte: createScheduleDto.from } },
          { to: { $lte: createScheduleDto.to } },
        ],
      });

      if (exists !== 0) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Already Booked!');
      }

      let response: Awaited<any | null> = await this.scheduleModel.create(
        createScheduleDto,
      );

      if (response == null) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Bad Request!');
      }

      return RESPONSE(HttpStatus.CREATED, response, 'Created!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

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

  async getAllDetails(): Promise<ResponseDTO> {
    try {
      let response: Awaited<any[]> = await this.scheduleModel.aggregate([
        {
          $addFields: {
            price: { $toDouble: { $toString: '$price' } },
            date_to: tz({ $toString: '$$to' }, 'Asia/Manila').format(
              'YYYY-MM-Do hh:mm A',
            ),
            date_from: tz({ $toString: '$$from' }, 'Asia/Manila').format(
              'YYYY-MM-Do hh:mm A',
            ),
            test_create: tz({ $toString: '$$createdAt' }, 'Asia/Manila').format(
              'YYYY-MM-Do hh:mm A',
            ),
          },
        },
      ]);
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No Schedules Yet!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
