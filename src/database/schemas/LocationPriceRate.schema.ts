import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomUUID } from 'crypto';
import { Schema as Scheme } from 'mongoose';

export type LocalPriceRateDocument = HydratedDocument<LocalPriceRate>;

@Schema({ timestamps: true, collection: 'LocalPriceRate' })
export class LocalPriceRate {
  @Prop({ type: String, default: randomUUID })
  _id: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  location: string;

  @Prop({
    type: Scheme.Types.Decimal128,
    default: 0.0,
  })
  regular_price: number;

  @Prop({
    type: Scheme.Types.Decimal128,
    default: 0.0,
  })
  overnight_price: number;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const LocalPriceRateSchema =
  SchemaFactory.createForClass(LocalPriceRate);
