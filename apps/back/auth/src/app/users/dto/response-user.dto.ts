import { Exclude} from 'class-transformer';

export class ResponseUserDto {
  
  name: string;

  @Exclude()
  password: string;

 
  email: string;

  
  age: number;
}