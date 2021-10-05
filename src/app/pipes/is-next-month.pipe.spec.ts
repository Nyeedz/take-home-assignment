/* tslint:disable:no-unused-variable */

import { addMonths } from 'date-fns';
import { IsNextMonthPipe } from './is-next-month.pipe';

describe('IsNextMonth: Pipe', () => {
  const isNextMonthPipe = new IsNextMonthPipe();

  it('should create', () => {
    expect(isNextMonthPipe).toBeTruthy();
  });

  it('should returns true for a month from', () => {
    expect(isNextMonthPipe.transform(addMonths(new Date(), 1))).toBeTrue();
  });

  it('should returns false for current date', () => {
    expect(isNextMonthPipe.transform(new Date())).toBeFalse();
  });
});
