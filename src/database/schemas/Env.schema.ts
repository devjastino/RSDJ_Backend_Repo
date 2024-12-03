import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomUUID } from 'crypto';
import { Schema as Scheme } from 'mongoose';

export type EnviromentVariablesDocument = HydratedDocument<EnviromentVariables>;

@Schema({ timestamps: true, collection: 'EnviromentVariables' })
export class EnviromentVariables {
  @Prop({ type: String, default: randomUUID })
  _id: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  key: string;

  @Prop({
    type: Scheme.Types.Mixed,
    default: null,
  })
  value: Scheme.Types.Mixed;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const EnviromentVariablesSchema =
  SchemaFactory.createForClass(EnviromentVariables);
