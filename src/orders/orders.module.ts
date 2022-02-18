import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/orders.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
    controllers: [OrdersController],
    providers: [OrdersService],
  })
export class OrdersModule {}
