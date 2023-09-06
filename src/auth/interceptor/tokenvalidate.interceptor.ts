import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenValidationInterceptor implements NestInterceptor {
  constructor(private readonly jwtService: JwtService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();

    const token = request.headers.authorization;

    if (!token) {
      return throwError(() => new UnauthorizedException('Token not provided'));
    }

    let decodedToken;

    try {
      decodedToken = this.jwtService.verify(token);
    } catch (error) {
      return throwError(() => new UnauthorizedException('Invalid token'));
    }

    if (!decodedToken.userId || !decodedToken.roles.includes('admin')) {
      return throwError(() => new UnauthorizedException('Unauthorized access'));
    }

    return next.handle();
  }
}
