import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Res,
} from '@nestjs/common';
import { LocationPricingService } from './location-pricing.service';
import { CreateLocationPricingDto } from './dto/create-location-pricing.dto';
import { UpdateLocationPricingDto } from './dto/update-location-pricing.dto';
import { Response } from 'express';
import { ResponseDTO } from 'src/constants/response.dto';

@Controller('location-pricing')
export class LocationPricingController {
  constructor(
    private readonly locationPricingService: LocationPricingService,
  ) {}

  @Post()
  async create(
    @Body() createLocationPricingDto: CreateLocationPricingDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.locationPricingService.create(createLocationPricingDto);
    res.status(response.status).send(response);
  }

  @Get()
  async findAll(@Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.locationPricingService.findAll();
    res.status(response.status).send(response);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.locationPricingService.findOne(id);
    res.status(response.status).send(response);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLocationPricingDto: UpdateLocationPricingDto,
    @Res() res: Response,
  ): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.locationPricingService.update(id, updateLocationPricingDto);
    res.status(response.status).send(response);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response): Promise<void> {
    let response: Awaited<ResponseDTO> =
      await this.locationPricingService.remove(id);
    res.status(response.status).send(response);
  }
}
