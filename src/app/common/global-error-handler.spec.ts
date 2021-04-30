import { ErrorHandler, InjectionToken } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler';
/**
 * Test Handler with GermanyService
 */

const WindowToken = new InjectionToken<Window>('Window');

describe('GlobalErrorHandler', () => {
	let injector: TestBed;
	let globalErrorHandler: GlobalErrorHandler;
	let errorHandler: jasmine.Spy;

	beforeEach(() => {
		errorHandler = spyOn(ErrorHandler.prototype, 'handleError');

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
		expect(console.error).toHaveBeenCalled();
	});
});
