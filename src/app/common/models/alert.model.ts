/** Alert interface */
export interface Alert {
	text: string;
	type: AlertType;
}

/** Alert types, this will indicate the color in the NgbAlert component */
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
