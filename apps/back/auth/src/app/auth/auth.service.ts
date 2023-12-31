import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(userId: string, pass: string) {
    const user = await this.usersService.findOne(userId);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, username: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
