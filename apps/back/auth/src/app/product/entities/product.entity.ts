
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({ required: true })
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(2)
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop()
    quantity: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
