import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateMenuDto{
    @IsString()
    name:string;

    @IsNumber()
    price:number

    @IsString()
    @IsOptional()
    description?:string;
}