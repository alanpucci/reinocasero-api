import { Type } from "class-transformer";
import { IsArray, IsDateString, IsString, ValidateNested } from "class-validator";
import { CreateMenuDto } from '../../menues/dtos/menu.dto';

export class CreateOrderDto{
    @IsString()
    client:string;
    
    @IsDateString()
    deliveryDate:Date;

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreateMenuDto)
    menuItems: CreateMenuDto[];

    description?:string;
}