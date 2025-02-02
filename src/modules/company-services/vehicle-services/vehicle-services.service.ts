import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseDTO } from 'src/constants/response.dto';
import { Vehicle } from 'src/database/schemas/Vehicle.schema';
import { RESPONSE } from 'src/utils/response.utils';
import { GetVehicleDto } from './dto/get-vehicle-service.dto';
import { CreateVehicleDto } from './dto/create-vehicle-service.dto';

@Injectable()
export class VehicleServicesService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {
    try {
      let getArray: { image_url: string; is_active: boolean }[] = JSON.parse(
        createVehicleDto.images,
      );
      createVehicleDto.images = getArray;
      let response: Awaited<GetVehicleDto | null> =
        await this.vehicleModel.create(createVehicleDto);
      if (response == null) {
        return RESPONSE(HttpStatus.BAD_REQUEST, {}, 'Bad Request!');
      }
      return RESPONSE(HttpStatus.CREATED, response, 'Created!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getAll(): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetVehicleDto[]> = await this.vehicleModel
        .find({ is_active: true })
        .select({ __v: 0 });
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No Schedules Yet!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getVehicleByQuery(id: string): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetVehicleDto> = await this.vehicleModel
        .findOne({ is_active: true, $or: [{ vehicle_name: id }, { _id: id }] })
        .select({ __v: 0, images: 0 });
      if (response == null) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No Schedules Yet!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getVehicleByQueryAndPricing(id: string): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetVehicleDto[]> =
        await this.vehicleModel.aggregate([
          {
            $match: { _id: id },
          },
          {
            $lookup: {
              from: 'Pricing',
              localField: 'vehicle_model',
              foreignField: 'pricing_type',
              as: 'pricing_info',
              pipeline: [
                {
                  $project: { __v: 0, createdAt: 0, updatedAt: 0 },
                },
                {
                  $set: { pricing: { $toDouble: '$pricing' } },
                },
              ],
            },
          },
          {
            $set: {
              pricing_info: { $first: '$pricing_info' },
            },
          },
          {
            $project: { __v: 0, createdAt: 0, updatedAt: 0 },
          },
        ]);
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No Schedules Yet!');
      }
      return RESPONSE(HttpStatus.OK, response[0], 'OK!');
    } catch (error: any) {
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getAllVehicles(): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetVehicleDto[]> =
        await this.vehicleModel.aggregate([
          {
            $addFields: {
              display_image: { $first: '$images' },
            },
          },
          {
            $project: {
              __v: 0,
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

  async getAllVehiclesWithInfo(): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetVehicleDto[]> =
        await this.vehicleModel.aggregate([
          {
            $lookup: {
              from: 'Pricing',
              localField: 'vehicle_model',
              foreignField: 'pricing_type',
              as: 'pricing_info',
              pipeline: [
                {
                  $project: { __v: 0, createdAt: 0, updatedAt: 0 },
                },
                {
                  $set: { pricing: { $toDouble: '$pricing' } },
                },
              ],
            },
          },
          {
            $set: {
              pricing_info: { $first: '$pricing_info' },
            },
          },
          {
            $project: { __v: 0, createdAt: 0, updatedAt: 0 },
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
