import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AppError } from './models';
import { AlertService } from './services';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
	constructor(private injector: Injector) {}

	handleError(error: Error | HttpErrorResponse): void {
		const alertService = this.injector.get(AlertService);
		let customAppError: AppError;

		if (error instanceof HttpErrorResponse) {
			customAppError = AppError.initializeHttpResponseError(error);
		} else {
			customAppError = AppError.initializeError(error);
		}

		alertService.error(customAppError.translatedMessage);

		/**
		 * For further support and improvement, the errors should be log in a server.
		 * For this project we print the errors in console.
		 */

		console.error(customAppError);
	}
}
