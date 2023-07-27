import { IsNotEmpty, IsOptional, IsNumber, IsEmail, IsString, MaxLength, MinLength, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(4)
  password: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @IsOptional()
  @Max(120)
  @Min(14)
  age: number;
}