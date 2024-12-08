import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomUUID } from 'crypto';
import { ImageSchema } from './Image.schema';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema({ timestamps: true, collection: 'Vehicle' })
export class Vehicle {
  @Prop({ type: String, default: randomUUID })
  _id: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  vehicle_name: string;

  @Prop({
    type: String,
    required: true,
  })
  vehicle_model: string;

  @Prop({
    type: [ImageSchema],
    required: true,
  })
  images: { image_url: string; is_active: boolean }[];

  @Prop({
    type: String,
    required: true,
  })
  vehicle_type: string;

  @Prop({
    type: String,
  })
  vehicle_description: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  plate_number: string;

  @Prop({
    type: Number,
    default: 1,
  })
  vehicle_status: number;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
