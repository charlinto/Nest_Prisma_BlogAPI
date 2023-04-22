import { IsEmail, IsNotEmpty, IsString, MinDate, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)

    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsEmail()

    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)

    password: string
    
}
