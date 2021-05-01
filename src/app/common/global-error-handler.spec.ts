import { ErrorHandler } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { GlobalErrorHandler } from './global-error-handler';

describe('GlobalErrorHandler', () => {
	let injector: TestBed;
	let globalErrorHandler: GlobalErrorHandler;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }]
		});
		injector = getTestBed();
		globalErrorHandler = (injector.inject(ErrorHandler) as unknown) as GlobalErrorHandler;
	});

	beforeEach(() => {
		spyOn(console, 'error');
	});

	it('should call globalErrorHandler with Error', () => {
		const error = new Error();
		globalErrorHandler.handleError(error);

		expect(console.error).toHaveBeenCalledWith(error);
	});
});
