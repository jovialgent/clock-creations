import type { DateTime } from 'luxon';

export interface ITime {
	year: string;
	second: string;
	minute: string;
	hour: string;
	day: string;
	month: string;
	current: DateTime;
}
