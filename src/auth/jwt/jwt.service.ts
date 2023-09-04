import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthService {
  usersService: any;
  constructor(private readonly jwtService: JwtService) {}

  async signPayload(payload: any) {
    return this.jwtService.sign(payload);
  }

  async validatePayload(payload: any) {
    const user = await this.usersService.findById(payload.sub);

    if (user) {
      return { userId: user.id, username: user.username };
    } else {
      return null;
    }
  }
}
