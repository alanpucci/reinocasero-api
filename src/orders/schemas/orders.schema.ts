import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MenuItem } from '../models/menuItem.model';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  client: string;

  @Prop()
  creationDate: Date;

  @Prop()
  deliveryDate: Date;

  @Prop()
  menuItems: MenuItem[];

  @Prop()
  totalPrice: number;

  @Prop()
  description:string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
