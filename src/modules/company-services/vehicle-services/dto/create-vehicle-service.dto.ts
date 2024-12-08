export class CreateVehicleDto {
  vehicle_name: string;
  vehicle_model: string;
  vehicle_type: string;
  images: { image_url: string; is_active: boolean }[] | any;
  vehicle_description: string;
  plate_number: string;
  vehicle_status: number;
  is_active: boolean;
}
