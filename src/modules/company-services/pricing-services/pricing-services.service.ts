import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pricing } from 'src/database/schemas/Pricing.schema';
import { RESPONSE } from 'src/utils/response.utils';
import { CreatePricingServicesDto } from './dto/create-pricing-services.dto';
import { GetPricingServicesDto } from './dto/get-pricing-services.dto';
import { ResponseDTO } from 'src/constants/response.dto';

@Injectable()
export class PricingServicesService {
  constructor(
    @InjectModel(Pricing.name) private pricingModel: Model<Pricing>,
  ) {}

  async create(
    createPricingServicesDto: CreatePricingServicesDto,
  ): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetPricingServicesDto | null> =
        await this.pricingModel.create(createPricingServicesDto);
      if (response == null) {
        return RESPONSE(
          HttpStatus.BAD_REQUEST,
          {},
          'Failed to create pricing!',
        );
      }
      return RESPONSE(HttpStatus.CREATED, response, 'Created!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getAll(): Promise<ResponseDTO> {
    try {
      let response: Awaited<ResponseDTO[]> = await this.pricingModel.find();
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No pricing data yet!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }

  async getOne(query: string): Promise<ResponseDTO> {
    try {
      let response: Awaited<GetPricingServicesDto[]> =
        await this.pricingModel.findOne({
          $or: [{ _id: query }, { pricing_type: query }],
        });
      if (response.length == 0) {
        return RESPONSE(HttpStatus.NOT_FOUND, [], 'No pricing data yet!');
      }
      return RESPONSE(HttpStatus.OK, response, 'OK!');
    } catch (error: any) {
      console.log(error);
      return RESPONSE(HttpStatus.BAD_REQUEST, error, 'Error!');
    }
  }
}
