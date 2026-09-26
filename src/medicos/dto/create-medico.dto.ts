import { Transform } from "class-transformer";
import { isNotEmpty, IsNotEmpty, IsString, Max, MaxLength } from "class-validator";

export class CreateMedicoDto {
    

    @IsNotEmpty({message: 'el nombre es obligatorio'})
    @IsString({message: 'el nombre debe ser de tipo cadena'})
    @MaxLength(50,{message: 'el nombre debe tener maximo 50 caracteres'})
    @Transform(({value }): string | undefined =>(typeof value == 'string' ? value.trim(): value))
    readonly    nombres: string;

    @IsNotEmpty({message: 'el nombre es obligatorio'})
    @IsString({message: 'el nombre debe ser de tipo cadena'})
    @MaxLength(50,{message: 'el nombre debe tener maximo 50 caracteres'})
    @Transform(({value }): string | undefined =>(typeof value == 'string' ? value.trim(): value))
    readonly    fecha_nacimiento: Date;
    
  @IsNotEmpty({message: 'el nombre es obligatorio'})
    @IsString({message: 'el nombre debe ser de tipo cadena'})
    @MaxLength(50,{message: 'el nombre debe tener maximo 50 caracteres'})
    @Transform(({value }): string | undefined =>(typeof value == 'string' ? value.trim(): value))
    readonly    celular: string;

    @IsNotEmpty({message: 'el nombre es obligatorio'})
    @IsString({message: 'el nombre debe ser de tipo cadena'})
    @MaxLength(50,{message: 'el nombre debe tener maximo 50 caracteres'})
    @Transform(({value }): string | undefined =>(typeof value == 'string' ? value.trim(): value))
    readonly    especialidad: string;



}
