import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomUUID } from 'crypto';
import { Schema as Scheme } from 'mongoose';

export type PricingDocument = HydratedDocument<Pricing>;

@Schema({ timestamps: true, collection: 'Pricing' })
export class Pricing {
  @Prop({ type: String, default: randomUUID })
  _id: string;

  @Prop({
    type: Scheme.Types.Decimal128,
    required: true,
    unique: true,
  })
  pricing: number;

  @Prop({
    type: Number,
    default: 0,
  })
  per_unit: number;

  @Prop({
    type: String,
    default: 'km',
  })
  unit: string;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const PricingSchema = SchemaFactory.createForClass(Pricing);
