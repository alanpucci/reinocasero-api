import { Body, Controller, Post, Get } from '@nestjs/common';
import { MenuesService } from './menues.service';
import { CreateMenuDto } from './dtos/menu.dto';

@Controller('menues')
export class MenuesController {
    constructor(private menuesService: MenuesService) {}

    @Post()
    async createMenu(@Body() menu:CreateMenuDto):Promise<{}>{
        const createdMenu = await this.menuesService.create(menu);
        return {
            msg:"Menu creado exitosamente",
            status:200,
            data:createdMenu
        }
    }

    @Get()
    async getMenues():Promise<{}>{
        const menues = await this.menuesService.getAll();
        return {
            total:menues.length,
            menues
        };
    }

}
