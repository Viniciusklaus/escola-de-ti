import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsString, MaxLength, MinLength, IsEmail, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
