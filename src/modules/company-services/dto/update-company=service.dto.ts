import { PartialType } from '@nestjs/mapped-types';
import { CreateCompany=serviceDto } from './create-company=service.dto';

export class UpdateCompany=serviceDto extends PartialType(CreateCompany=serviceDto) {}
