import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuesController } from './menues.controller';
import { MenuesService } from './menues.service';
import { Menu, MenuSchema } from './models/menues.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])],
    controllers: [MenuesController],
    providers: [MenuesService]
})
export class MenuesModule {}
