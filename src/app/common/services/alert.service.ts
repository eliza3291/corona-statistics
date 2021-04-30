import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert, AlertType } from '../models';

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	private alertSubject = new Subject<Alert>();

	error(message: string): void {
		this.alertSubject.next({ type: AlertType.DANGER, text: message });
	}

	success(message: string): void {
		this.alertSubject.next({ type: AlertType.SUCCESS, text: message });
	}

	info(message: string): void {
		this.alertSubject.next({ type: AlertType.INFO, text: message });
	}

	warning(message: string): void {
		this.alertSubject.next({ type: AlertType.WARNING, text: message });
	}

	primary(message: string): void {
		this.alertSubject.next({ type: AlertType.PRIMARY, text: message });
	}

	secondary(message: string): void {
		this.alertSubject.next({ type: AlertType.SECONDARY, text: message });
	}

	light(message: string): void {
		this.alertSubject.next({ type: AlertType.LIGHT, text: message });
	}

	dark(message: string): void {
		this.alertSubject.next({ type: AlertType.DARK, text: message });
	}

	remove(): void {
		this.alertSubject.next();
	}

	alertSubscription(): Observable<Alert> {
		return this.alertSubject.asObservable();
	}
}
