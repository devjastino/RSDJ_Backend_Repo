import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceServiceDto } from './create-maintenance-service.dto';

export class UpdateMaintenanceServiceDto extends PartialType(CreateMaintenanceServiceDto) {}
