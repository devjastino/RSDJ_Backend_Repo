import { PartialType } from '@nestjs/mapped-types';
import { CreateTextServiceDto } from './create-text-service.dto';

export class UpdateTextServiceDto extends PartialType(CreateTextServiceDto) {}
