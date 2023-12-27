import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { NotFoundError, Observable, catchError, throwError } from 'rxjs';
import { RepositoryError } from 'src/service/domain/error/repository/repository.error';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  private notFound(error: string): HttpException {
    return new HttpException(
      {
        code: HttpStatus.NOT_FOUND,
        message: error,
        details: [],
      },
      HttpStatus.NOT_FOUND,
    );
  }

  private fail(error: string): HttpException {
    return new HttpException(
      {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error,
        details: [],
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof RepositoryError) {
          return throwError(() => this.notFound(error.message));
        } else {
          return throwError(() => this.fail(error.message));
        }
      }),
    );
  }
}
