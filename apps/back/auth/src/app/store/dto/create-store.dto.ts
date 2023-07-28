import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Product } from "../../product/entities/product.entity";

export class CreateStoreDto {
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(2)
    name: string
    products: Product[]
    address: string;
}
