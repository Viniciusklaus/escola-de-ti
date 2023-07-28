import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from '../../product/entities/product.entity';

export type UserDocument = HydratedDocument<Store>;

@Schema()
export class Store {
    @Prop({ required: true })
    name: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[];

    @Prop()
    address: string;

}

export const StoreSchema = SchemaFactory.createForClass(Store);
