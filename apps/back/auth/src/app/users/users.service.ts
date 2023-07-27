import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto)
    return plainToClass(User, user)
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.userModel.findByIdAndUpdate(id,updateUserDto)
    return `user #${updateUserDto.name}} atualizado `;
  }

  remove(id: string) {
    this.userModel.findByIdAndDelete(id)
    return `user #${id} deletado`;
  }
}
