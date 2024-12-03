import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomUUID } from 'crypto';
import { passwordValidator, userValidator } from '../validators/User.validator';
import { isEmail } from 'validator';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, collection: 'User' })
export class User {
  @Prop({ type: String, default: randomUUID })
  _id: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => userValidator(v),
      message: 'Invalid Username!',
    },
  })
  username: string;

  @Prop({
    type: String,
    required: true,
    validate: {
      validator: (v: string) => passwordValidator(v),
      message: 'Invalid Password!',
    },
  })
  password: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => isEmail(v),
      message: 'Invalid Email!',
    },
  })
  email: string;

  @Prop({ type: String, default: 'user' })
  user_type: string;

  @Prop({ type: String, default: 'user' })
  position: string;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
