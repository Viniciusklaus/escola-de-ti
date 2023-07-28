import { IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(2)
    name: string
    description: string
    price: number
    quantity: number

}
