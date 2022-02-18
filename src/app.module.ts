import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { MenuesModule } from './menues/menues.module';

@Module({
  imports: [OrdersModule, MenuesModule,MongooseModule.forRoot('mongodb+srv://alanpucci:waw23jew@cluster0.nmi3z.mongodb.net/reinocasero?retryWrites=true&w=majority'), MenuesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
