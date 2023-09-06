import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const headers = request.headers;
    const url = request.url;

    if (!headers.authorization) {
      return throwError(() => new UnauthorizedException('Unauthorized access'));
    }

    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        console.log(`URL:`, url);
        console.log(`Headers:`, headers);
        console.log(`After... ${Date.now() - now}ms`);
      }),
    );
  }
}
