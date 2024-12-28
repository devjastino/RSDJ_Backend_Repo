import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLocationPricingDto } from './dto/create-location-pricing.dto';
import { UpdateLocationPricingDto } from './dto/update-location-pricing.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LocationPriceRate } from 'src/database/schemas/LocationPriceRate.schema';
import { RESPONSE } from 'src/utils/response.utils';
import { ResponseDTO } from 'src/constants/response.dto';
import { GetLocationPricingDto } from './dto/get-location-pricing.dto';

@Injectable()
export class LocationPricingService {
  constructor(
    @InjectModel(LocationPriceRate.name)
    private locationPricingModel: Model<LocationPriceRate>,
  ) {}

  async create(
    createLocationPricingDto: CreateLocationPricingDto,
  ): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetLocationPricingDto | null> =
        await this.locationPricingModel.create(createLocationPricingDto);
      if (response == null) {
        return RESPONSE(
          HttpStatus.BAD_REQUEST,
          {},
          'Failed to create location pricing!',
        );
      }
      return RESPONSE(HttpStatus.CREATED, response, 'Created!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async findAll(): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetLocationPricingDto[]> =
        await this.locationPricingModel.aggregate([
          {
            $set: {
              regular_price: { $toDouble: '$regular_price' },
              overnight_price: { $toDouble: '$overnight_price' },
            },
          },
          {
            $project: {
              __v: 0,
            },
          },
        ]);
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No pricing data yet!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async findAllActive(): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetLocationPricingDto[]> =
        await this.locationPricingModel.aggregate([
          {
            $match: { is_active: true },
          },
          {
            $set: {
              regular_price: { $toDouble: '$regular_price' },
              overnight_price: { $toDouble: '$overnight_price' },
            },
          },
          {
            $project: {
              __v: 0,
            },
          },
        ]);
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No pricing data yet!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async findOne(id: string): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetLocationPricingDto[]> =
        await this.locationPricingModel.aggregate([
          {
            $match: { _id: id },
          },
          {
            $set: {
              regular_price: { $toDouble: '$regular_price' },
              overnight_price: { $toDouble: '$overnight_price' },
            },
          },
          {
            $project: {
              __v: 0,
            },
          },
        ]);
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, {}, 'No data found!');
      }
      return RESPONSE(HttpStatus.OK, response[0], 'OK!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async update(
    id: string,
    updateLocationPricingDto: UpdateLocationPricingDto,
  ): Promise<ResponseDTO> {
    try {
      let exists: Awaited<ResponseDTO> = await this.findOne(id);
      if (exists.status !== 200) {
        return exists;
      }
      let updateData = await this.locationPricingModel.updateOne(
        { _id: id },
        updateLocationPricingDto,
      );
      if (updateData == null) {
        return RESPONSE(
          HttpStatus.BAD_REQUEST,
          {},
          'Failed to update location pricing!',
        );
      }
      let newData: Awaited<ResponseDTO> = await this.findOne(id);
      return RESPONSE(HttpStatus.OK, newData.response, 'Updated!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async remove(id: string): Promise<ResponseDTO> {
    try {
      let exists: Awaited<ResponseDTO> = await this.findOne(id);
      if (exists.status !== 200) {
        return exists;
      }
      let deleteData = await this.locationPricingModel.deleteOne({ _id: id });
      if (deleteData == null) {
        return RESPONSE(
          HttpStatus.BAD_REQUEST,
          {},
          'Failed to update location pricing!',
        );
      }
      return RESPONSE(HttpStatus.OK, {}, 'Deleted!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
