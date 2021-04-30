export interface Alert {
	text: string;
	type: AlertType;
}

export enum AlertType {
	DANGER = 'danger',
	SUCCESS = 'success',
	INFO = 'info',
	WARNING = 'warning',
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	LIGHT = 'light',
	DARK = 'dark'
}
