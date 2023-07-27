import { Product } from "../../product/entities/product.entity";

export class CreateStoreDto {
    name: string
    products: Product[]
    address: string;
}
