import { HttpErrorResponse } from '@angular/common/http';

/** Merge response model from API with Error lib model */
export interface CustomAppError {
	code?: number;
	name?: string;
	message: string;
	/** Further information about the error. */
	details?: string;
}

/** Errors from the app, convert all error to same class */
export class AppError extends Error {
	/** Save url can be helpful to fix errors. */
	public url?: string;
	public appError: CustomAppError;
	public translatedMessage: string;

	constructor(message: string) {
		super(message);
		this.name = 'AppError';
		this.appError = Object.create({}) as CustomAppError;
		this.translatedMessage = message;
	}

	/** Initialize AppError from Error */
	static initializeError(error: Error): AppError {
		const newAppError = new AppError(error.message);
		newAppError.appError = {
			message: error.message,
			name: error.name,
			details: error.stack
		};
		newAppError.translatedMessage = error.message;
		return newAppError;
	}

	/** Initialize AppError from HttpErrorResponse */
	static initializeHttpResponseError(error: HttpErrorResponse): AppError {
		const newAppError = new AppError(error.message);
		newAppError.appError = {
			code: error.status,
			message: error.statusText,
			details: (error.error as Error).message
		};
		newAppError.url = error.url || undefined;
		newAppError.translatedMessage = newAppError.getMessageFromCode(error.status) || error.statusText;
		return newAppError;
	}

	/** Write user friendly messages for the possible error codes */
	getMessageFromCode(code: number): string | undefined {
		if (!navigator.onLine) {
			return 'Hey! You are offline. Please check your internet connection and reload the page.';
		}

		switch (code) {
			case 400: {
				return 'Something went wrong during the request. Please try again.';
			}
			case 404: {
				return 'No results were found with the given criteria.';
			}
			default:
				return 'Something went wrong during the request. Please try again. If the problem persists contact support.';
		}
	}
}
