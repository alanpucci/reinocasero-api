import { IsOptional, IsString } from "class-validator";

export class MenuItem{
    @IsString()
    name:string;
    @IsString()
    price:string;
    @IsString()
    @IsOptional()
    description?:string;
}
