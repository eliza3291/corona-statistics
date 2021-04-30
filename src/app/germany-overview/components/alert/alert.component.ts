import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Alert, AlertService } from '@common';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit, OnDestroy {
	private subscription: Subscription | undefined;
	message?: Alert;

	constructor(private alertService: AlertService, private changeRef: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.subscription = this.alertService.alertSubscription().subscribe((message) => {
			this.message = message;
			this.changeRef.detectChanges();
		});
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
