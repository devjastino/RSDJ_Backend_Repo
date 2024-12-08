import { Injectable } from '@nestjs/common';
import { CreateTextServiceDto } from './dto/create-text-service.dto';
import { UpdateTextServiceDto } from './dto/update-text-service.dto';

@Injectable()
export class TextServicesService {
  create(createTextServiceDto: CreateTextServiceDto) {
    return 'This action adds a new textService';
  }

  findAll() {
    return `This action returns all textServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textService`;
  }

  update(id: number, updateTextServiceDto: UpdateTextServiceDto) {
    return `This action updates a #${id} textService`;
  }

  remove(id: number) {
    return `This action removes a #${id} textService`;
  }
}
