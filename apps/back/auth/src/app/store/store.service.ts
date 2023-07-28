import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private storeModel: Model<Store>) { }
  create(createStoreDto: CreateStoreDto) {
    const creadedstore = this.storeModel.create(createStoreDto)
    return creadedstore;
  }

  findAll() {
    const findedall = this.storeModel.find()
    return findedall;
  }

  findOne(id: string) {
    const findedone = this.storeModel.findById(id)
    return findedone;
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {

    let store = this.findOne(id)
    
    console.log(store)
    return this.storeModel.findByIdAndUpdate(id, updateStoreDto)
  }

  remove(id: string) {
    const removed = this.storeModel.findByIdAndRemove(id)
    return removed;
  }
}
