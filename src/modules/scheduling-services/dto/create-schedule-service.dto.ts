export class CreateScheduleDto {
  user_id: string;
  vehicle_id: string;
  date: Date;
  from: Date;
  to: Date;
  distance: number;
  destination_details: string;
  price: number;
  remarks: string;
  transaction_id: string;
  schedule_type: string;
  schedule_status: number;
  is_active: boolean;
}
