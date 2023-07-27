import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot('mongodb://0.0.0.0:27017/escola-de-ti')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
