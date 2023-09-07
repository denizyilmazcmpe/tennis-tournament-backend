import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly jwtService: JwtService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const headers = request.headers;
    const url: string = request.url;
    const token = headers.authorization;

    if (context.getType() !== 'http') {
      return next.handle();
    }
    if (!url.includes('login')) {
      console.log('inside login');
      if (token) {
        try {
          const decodedToken = this.jwtService.verify(token);
          // Eğer token doğrulama başarılıysa, isteğe bir 'user' nesnesi ekleyebilirsiniz.
          request.user = decodedToken;
        } catch (error) {
          return throwError(() => new UnauthorizedException('Invalid token'));
        }
      }
    }
  

    // Sadece GET isteklerinde token doğrulama yapma
    

    console.log('Your token: ', token);

    return next.handle();
  }
}
