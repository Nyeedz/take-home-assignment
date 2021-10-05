import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addMonths, subMonths } from 'date-fns';
import { KeyboardKeys } from '../../helpers/enums/keyboard-keys.enum';
import { isNextMonth } from '../../helpers/is-next-monsth';

@Component({
  selector: 'month-input',
  template: `
    <button [disabled]="date | isNextMonth" class="input-action" (click)="subtractMonth()">
      <img class="caret-left" src="assets/caret.svg" alt="" />
    </button>
    <a class="input-date" href="#">
      <span>{{ date | date: 'MMMM' }}</span>
      <span>{{ date | date: 'y' }}</span>
    </a>
    <button class="input-action" (click)="addMonth()">
      <img class="caret-right" src="assets/caret.svg" alt="" />
    </button>
  `,
  styleUrls: ['./month-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MonthInputComponent,
      multi: true
    }
  ]
})
export class MonthInputComponent implements ControlValueAccessor {
  date: Date = addMonths(new Date(), 1);
  touched = false;
  disabled = false;

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case KeyboardKeys.Left:
        if (isNextMonth(this.date)) {
          break;
        }

        this.subtractMonth();
        break;
      case KeyboardKeys.Right:
        this.addMonth();
        break;
      default:
        break;
    }
  }

  onChange = (date: Date) => {};

  onTouched = () => {};

  subtractMonth() {
    this.date = subMonths(this.date, 1);
    this.onChange(this.date);
  }

  addMonth() {
    this.date = addMonths(this.date, 1);
    this.onChange(this.date);
  }

  markAsTouched() {
    if (this.touched) {
      return;
    }

    this.onTouched();
    this.touched = true;
  }

  writeValue(date: Date) {
    this.date = date;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
