import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle-service.dto';

export class UpdateUserServiceDto extends PartialType(CreateVehicleDto) {}
