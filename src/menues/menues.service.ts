import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from './models/menues.schema';
import { CreateMenuDto } from './dtos/menu.dto';

@Injectable()
export class MenuesService {
    constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

    async create(createMenuDto: CreateMenuDto):Promise<Menu>{
        const createdMenu = new this.menuModel(createMenuDto)
        return createdMenu.save();
    }

    async getAll():Promise<Menu[]>{
        const menues = await this.menuModel.find().exec();
        return menues;
    }

}
