import { Injectable } from '@nestjs/common';
import { CreateCompany=serviceDto } from './dto/create-company=service.dto';
import { UpdateCompany=serviceDto } from './dto/update-company=service.dto';

@Injectable()
export class Company=servicesService {
  create(createCompany=serviceDto: CreateCompany=serviceDto) {
    return 'This action adds a new company=service';
  }

  findAll() {
    return `This action returns all company=services`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company=service`;
  }

  update(id: number, updateCompany=serviceDto: UpdateCompany=serviceDto) {
    return `This action updates a #${id} company=service`;
  }

  remove(id: number) {
    return `This action removes a #${id} company=service`;
  }
}
