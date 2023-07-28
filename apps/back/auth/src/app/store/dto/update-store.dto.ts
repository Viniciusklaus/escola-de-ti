import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Product } from '../../product/entities/product.entity';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(2)
    name: string
    products: Product[]
    address: string;

}
