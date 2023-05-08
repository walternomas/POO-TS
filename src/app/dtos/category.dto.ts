/**
 * habilitar decoradores en tsconfig: "experimentalDecorators" = true
 */
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject
} from "class-validator"; // si comienza en minúscula se usa como una función y si comienza en mayúscula como decorador.

import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {

  @IsNotEmpty()
  @Length(4, 140)
  name!: string; // "!": lo vamos a inicializar en otro momento

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async ()=>{

  try {
    const dto = new CreateCategoryDto();
    dto.name = 'hola'
    await validateOrReject(dto);
  } catch (error) {
    console.error(error);
  }

})()
