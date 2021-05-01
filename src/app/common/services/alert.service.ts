import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert, AlertType } from '../models';

/** Service in charge to share the current alert message */
@Injectable({
	providedIn: 'root'
})
export class AlertService {
	private alertSubject = new Subject<Alert>();

	/** Set message as Danger */
	error(message: string): void {
		this.alertSubject.next({ type: AlertType.DANGER, text: message });
	}

	/** Set message as successful */
	success(message: string): void {
		this.alertSubject.next({ type: AlertType.SUCCESS, text: message });
	}

	/** Set message as informative */
	info(message: string): void {
		this.alertSubject.next({ type: AlertType.INFO, text: message });
	}

	/** Set message as a warning */
	warning(message: string): void {
		this.alertSubject.next({ type: AlertType.WARNING, text: message });
	}

	/** Set message as primary */
	primary(message: string): void {
		this.alertSubject.next({ type: AlertType.PRIMARY, text: message });
	}

	/** Set message as secondary */
	secondary(message: string): void {
		this.alertSubject.next({ type: AlertType.SECONDARY, text: message });
	}

	/** Set message as ligth */
	light(message: string): void {
		this.alertSubject.next({ type: AlertType.LIGHT, text: message });
	}

	/** Set message as dark */
	dark(message: string): void {
		this.alertSubject.next({ type: AlertType.DARK, text: message });
	}

	/** Remove alert after issue is fixed */
	remove(): void {
		this.alertSubject.next();
	}

	/** Return the subcription to the alert */
	alertSubscription(): Observable<Alert> {
		return this.alertSubject.asObservable();
	}
}
