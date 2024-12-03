import { Injectable } from '@nestjs/common';
import { CreatePricingServiceDto } from './dto/create-pricing-service.dto';
import { UpdatePricingServiceDto } from './dto/update-pricing-service.dto';

@Injectable()
export class PricingServicesService {
  create(createPricingServiceDto: CreatePricingServiceDto) {
    return 'This action adds a new pricingService';
  }

  findAll() {
    return `This action returns all pricingServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pricingService`;
  }

  update(id: number, updatePricingServiceDto: UpdatePricingServiceDto) {
    return `This action updates a #${id} pricingService`;
  }

  remove(id: number) {
    return `This action removes a #${id} pricingService`;
  }
}
