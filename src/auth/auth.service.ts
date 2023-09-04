import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  userService: any;
  constructor(private readonly jwtService: JwtService) {}
  private readonly users: any[] = [];

  async createUser(username: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      userId: this.users.length + 1,
      username: username,
      password: hashedPassword,
    };
    this.users.push(user);
    return user;
  }

  async getUserById(userId: number) {
    const user = this.users.find((u) => u.userId === userId);
    return user || null;
  }

  async updateUser(
    userId: number,
    updates: { username?: string; password?: string },
  ) {
    const userIndex = this.users.findIndex((u) => u.userId === userId);
    if (userIndex === -1) {
      return null;
    }

    const updatedUser = { ...this.users[userIndex], ...updates };
    this.users[userIndex] = updatedUser;

    return User;
  }

  async deleteUser(userId: number) {
    const userIndex = this.users.findIndex((u) => u.userId === userId);
    if (userIndex === -1) {
      return null;
    }

    const deletedUser = { ...this.users.splice(userIndex, 1)[0] };
    delete deletedUser.password;

    // Bu kısımda gerçek bir kullanıcı verisini silmek istiyorsanız
    // veritabanından silebilirsiniz.

    // Örnek: await this.userModel.findByIdAndDelete(userId);

    return deletedUser;
  }

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
