import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Alert, AlertService } from '@common';
import { Subscription } from 'rxjs';

/**
 * Component in charge to show alerts.
 */
@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	/** When angular triggers an error, the DOM is not updated.
	 * To show the alert, the ChangeDetectionStrategy should be on push
	 * so we can define when it should check it.
	 */
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit, OnDestroy {
	/** Save subscription of the service to destroy afterwards */
	private subscription: Subscription | undefined;
	public message?: Alert;

	constructor(private alertService: AlertService, private changeRef: ChangeDetectorRef) {}

	/** Subscribe to alert service to start listening for possible alerts. */
	ngOnInit(): void {
		this.subscription = this.alertService.alertSubscription().subscribe((message) => {
			this.message = message;
			this.changeRef.detectChanges();
		});
	}

	/** Unsubscribe from alert service when the component is destroyed. */
	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
