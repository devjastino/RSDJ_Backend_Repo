import { CreateScheduleDto } from 'src/modules/scheduling-services/dto/create-schedule-service.dto';

export class CreateBillingDto {
  price: number;
  product_data: any;
}

export class CreateBillingWithEmailDto {
  user_id: string;
  email: string;
  scheduling_data: CreateScheduleDto;
  price: number;
  product_data: any;
  quantity: number;
}
