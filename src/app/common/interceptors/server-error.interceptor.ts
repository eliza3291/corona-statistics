import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/** Intercept error from the backend to retry the request 1 time.
 * When required multiple validations can be made like:
 * - Refresh token when 401
 * - Wait to make request when 429
 */
@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => {
				return throwError(error);
			})
		);
	}
}
