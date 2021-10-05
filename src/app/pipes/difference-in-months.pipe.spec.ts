/* tslint:disable:no-unused-variable */

import { addYears } from 'date-fns';
import { DifferenceInMonthsPipe } from './difference-in-months.pipe';

describe('DifferenceInMonths: Pipe', () => {
  const isNextMonthPipe = new DifferenceInMonthsPipe();

  it('create an instance', () => {
    expect(isNextMonthPipe).toBeTruthy();
  });

  it('should return 12', () => {
    expect(isNextMonthPipe.transform(addYears(new Date(), 1))).toBe(12);
  });

  it('should return 0', () => {
    expect(isNextMonthPipe.transform(new Date())).toBe(0);
  });
});
