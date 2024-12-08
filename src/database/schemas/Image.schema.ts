import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImageDocument = HydratedDocument<Image>;

@Schema({ timestamps: true, collection: 'Image' })
export class Image {
  @Prop({
    type: String,
  })
  image_url: string;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
