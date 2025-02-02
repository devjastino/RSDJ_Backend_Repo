import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Schema as Scheme } from 'mongoose';
import { randomUUID } from 'crypto';
import { tz } from 'moment-timezone';

export type ScheduleDocument = HydratedDocument<Schedule>;

@Schema({ timestamps: true, collection: 'Schedule' })
export class Schedule {
  @Prop({ type: String, default: randomUUID })
  _id: string;

  @Prop({ type: String, required: true })
  user_id: string;

  @Prop({ type: String, required: true })
  vehicle_id: string;

  @Prop({ type: Date, required: true, default: tz('Asia/Manila') })
  from: Date;

  @Prop({ type: Date, required: true, default: tz('Asia/Manila') })
  to: Date;

  @Prop({ type: Number, default: 0 })
  distance: number;

  @Prop({ type: String, default: '' })
  destination_details: string;

  @Prop({ type: String, default: '' })
  drop_point: string;

  @Prop({
    type: Scheme.Types.Decimal128,
    required: true,
  })
  price: number;

  @Prop({ type: String, default: '' })
  remarks: string;

  @Prop({
    type: Number,
    default: 1,
  })
  schedule_status: number;

  @Prop({ type: String, required: true })
  transaction_reference_id: string;

  @Prop({
    type: String,
    default: 'RENTAL',
  })
  schedule_type: string;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
