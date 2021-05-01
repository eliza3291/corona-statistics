/**
 * Get a date before N days.
 */
export function getDateBefore(days: number): string {
	const date = new Date();
	date.setHours(0, 0, 0, 0);
	date.setDate(date.getDate() - days);
	return date.toISOString().split('T')[0];
}
