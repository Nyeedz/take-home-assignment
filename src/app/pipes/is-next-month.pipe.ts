import { Pipe, PipeTransform } from '@angular/core';
import { isNextMonth } from '../helpers/is-next-monsth';

@Pipe({
  name: 'isNextMonth'
})
export class IsNextMonthPipe implements PipeTransform {
  transform(date: Date): boolean {
    return isNextMonth(date);
  }
}
