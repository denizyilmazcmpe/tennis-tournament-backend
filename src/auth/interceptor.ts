import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    // Burada isteği işleyebilir veya loglayabilirsiniz.
    console.log(`Request received: ${request.url}`);
    console.log('headers ', JSON.stringify(request.headers));

    return next.handle().pipe(
      tap(() => {
        // Burada yanıtı işleyebilir veya loglayabilirsiniz.
        console.log(`Response sent: ${response.statusCode}`);
      }),
    );
  }
}