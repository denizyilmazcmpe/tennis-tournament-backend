import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  userService: any;
  constructor(private readonly jwtService: JwtService) {}

  async findUserByUsername(username: string): Promise<User | undefined> {
    const user = await this.userService.findByUsername(username);
    return user;
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.findUserByUsername(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }

    return null;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);

    if (user) {
      const payload = { sub: user.userId, username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
