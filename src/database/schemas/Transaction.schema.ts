import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomUUID } from 'crypto';
import { Schema as Scheme } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema({ timestamps: true, collection: 'Transaction' })
export class Transaction {
  @Prop({ type: String, default: randomUUID })
  _id: string;

  @Prop({
    type: Scheme.Types.Decimal128,
    required: true,
    default: 0.0,
  })
  transaction_price: number;

  @Prop({
    type: String,
    required: true,
  })
  transaction_reference_id: string;

  @Prop({ type: String, required: true })
  user_id: string;

  @Prop({ type: String })
  schedule_id: string;

  @Prop({
    type: String,
    default: 'unpaid',
  })
  transaction_status: string;

  @Prop({
    type: String,
  })
  transaction_type: string;

  @Prop({
    type: Date,
  })
  payment_date: Date;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
