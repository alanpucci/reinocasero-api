import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CreateMenuDto } from '../../menues/dtos/menu.dto';

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
  menuItems: CreateMenuDto[];

  @Prop()
  totalPrice: number;

  @Prop()
  description:string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
