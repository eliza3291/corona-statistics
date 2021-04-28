import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AppError } from './models';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: Error | HttpErrorResponse): void {
    let customAppError: AppError;

    if (error instanceof HttpErrorResponse) {
      customAppError = AppError.initializeHttpResponseError(error);
    } else {
      customAppError = AppError.initializeError(error);
    }

    // log error

    console.error(customAppError);
  }
}
