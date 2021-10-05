import { differenceInCalendarMonths } from 'date-fns';

export function isNextMonth(date: Date): boolean {
  return differenceInCalendarMonths(date, new Date()) === 1;
}
