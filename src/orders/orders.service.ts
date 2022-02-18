import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './models/orders.schema';
import { Model } from 'mongoose'
import { CreateOrderDto } from './dtos/orders.dto';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
      const createdOrder = new this.orderModel(createOrderDto);
      return createdOrder.save();
    }

    async getAll():Promise<Order[]>{
      const orders = this.orderModel.find().exec();
      return orders;
    }

}
