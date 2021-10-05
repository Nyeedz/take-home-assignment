import { Pipe, PipeTransform } from '@angular/core';
import { differenceInCalendarMonths } from 'date-fns';

@Pipe({
  name: 'differenceInMonths',
})
export class DifferenceInMonthsPipe implements PipeTransform {
  transform(value: any, args?: any): number {
    return differenceInCalendarMonths(value, new Date());
  }
}
