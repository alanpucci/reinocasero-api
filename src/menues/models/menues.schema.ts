import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
  @Prop()
  name: string;

  @Prop()
  modifiedDate: Date;

  @Prop()
  price: number;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
