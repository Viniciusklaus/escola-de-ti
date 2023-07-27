import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from '../../product/entities/product.entity';

export type UserDocument = HydratedDocument<Store>;

@Schema()
export class Store {
    @Prop({ required: true })
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(2)
    name: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }] })
    products: Product[];

    @Prop()
    address: string;

}

export const ProductSchema = SchemaFactory.createForClass(Store);
