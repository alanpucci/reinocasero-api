import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dtos/orders.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @Post()
    async createOrder(@Body() order:CreateOrderDto):Promise<{}>{
        const createdOrder = await this.ordersService.create(order);
        return {
            msg:"Orden creada exitosamente",
            status:200,
            data:createdOrder
        }
    }

    @Get()
    async listOrders():Promise<{}>{
        const orders = await this.ordersService.getAll();
        return {
            total:orders.length,
            orders
        }
    }
}
