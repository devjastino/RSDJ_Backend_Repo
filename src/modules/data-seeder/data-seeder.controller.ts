import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DataSeederService } from './data-seeder.service';

@Controller('data-seeder')
export class DataSeederController {
  constructor(private readonly dataSeederService: DataSeederService) {
    this.dataSeederService.createSeed();
  }
}
