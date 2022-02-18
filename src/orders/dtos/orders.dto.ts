import { Type } from "class-transformer";
import { IsArray, IsDate, IsDateString, IsNumber, IsString, ValidateNested } from "class-validator";
import { MenuItem } from "../models/menuItem.model";

export class CreateOrderDto{
    @IsString()
    client:string;
    @IsDateString()
    deliveryDate:Date;
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>MenuItem)
    menuItems: MenuItem[];
    description?:string;
}