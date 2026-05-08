import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

import { DomainException } from '@/catalog/domain/exceptions/domain.exception';

/**
 * Catches DomainExceptions and maps them to HTTP responses using the
 * httpStatus each exception declares. NestJS HttpExceptions are re-thrown
 * so NestJS's built-in handler processes them normally. Unknown errors
 * are logged and returned as 500.
 */
@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(DomainExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();

    if (exception instanceof DomainException) {
      response.status(exception.httpStatus).json({
        statusCode: exception.httpStatus,
        error: exception.name,
        message: exception.message,
      });
      return;
    }

    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json(exception.getResponse());
      return;
    }

    this.logger.error('Unhandled exception', exception);

    response.status(500).json({
      statusCode: 500,
      error: 'InternalServerError',
      message: 'An unexpected error occurred',
    });
  }
}
