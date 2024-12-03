import { PartialType } from '@nestjs/mapped-types';
import { CreateDataSeederDto } from './create-data-seeder.dto';

export class UpdateDataSeederDto extends PartialType(CreateDataSeederDto) {}
