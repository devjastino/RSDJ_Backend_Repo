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

  @Prop({ type: String, required: true })
  user_id: string;

  @Prop({ type: String, required: true })
  schedule_id: string;

  @Prop({
    type: Number,
    default: 1,
  })
  transaction_status: number;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);