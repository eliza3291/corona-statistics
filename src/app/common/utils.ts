/**
 * Get the date before N days.
 *
 * @export
 * @param {number} days
 * @returns {string}
 */
export function getDateBefore(days: number): string {
  let date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() - days);
  return date.toISOString().split('T')[0];
}
