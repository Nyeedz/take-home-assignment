import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { addMonths, differenceInMonths, format } from 'date-fns';
import { KeyboardKeys } from '../../helpers/enums/keyboard-keys.enum';
import { IsNextMonthPipe } from 'src/app/pipes/is-next-month.pipe';
import { MonthInputComponent } from './month-input.component';

describe('MonthYearInputComponent', () => {
  let component: MonthInputComponent;
  let fixture: ComponentFixture<MonthInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthInputComponent, IsNextMonthPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(MonthInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show actual date', () => {
    const currentDate = format(component.date, 'MMMM') + format(component.date, 'y');

    const text = fixture.debugElement
      .queryAll(By.css('.input-date span'))
      .reduce((prev, next) => prev + next.nativeElement.textContent, '');

    expect(text).toEqual(currentDate);
  });

  it('should increase a month by right key', () => {
    const eventKey = new KeyboardEvent('keydown', {
      key: KeyboardKeys.Right
    });
    let currentDate = component.date;

    fixture.nativeElement.dispatchEvent(eventKey);
    fixture.detectChanges();
    expect(differenceInMonths(component.date, currentDate)).toBe(1);
  });

  it('should descrease a month by left key', () => {
    const eventLeftKey = new KeyboardEvent('keydown', {
        key: KeyboardKeys.Left
      }),
      eventRightKey = new KeyboardEvent('keydown', {
        key: KeyboardKeys.Right
      });
    let currentDate = component.date;
    fixture.detectChanges();

    fixture.nativeElement.dispatchEvent(eventRightKey);
    fixture.nativeElement.dispatchEvent(eventRightKey);
    fixture.nativeElement.dispatchEvent(eventLeftKey);
    expect(differenceInMonths(component.date, currentDate)).toBe(1);
  });

  it('should increase a month by right key', () => {
    const eventLeftKey = new KeyboardEvent('keydown', {
        key: KeyboardKeys.Left
      }),
      eventRightKey = new KeyboardEvent('keydown', {
        key: KeyboardKeys.Right
      });
    let currentDate = component.date;
    fixture.detectChanges();

    fixture.nativeElement.dispatchEvent(eventLeftKey);
    fixture.nativeElement.dispatchEvent(eventLeftKey);
    fixture.nativeElement.dispatchEvent(eventRightKey);
    expect(differenceInMonths(component.date, currentDate)).toBe(1);
  });

  it('should decrease a month by one, clicking on the left button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    let currentDate = component.date;
    fixture.detectChanges();

    buttons[1].nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(differenceInMonths(component.date, currentDate)).toBe(1);
  });

  it('should decrease a month by one, clicking on the left button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    component.date = addMonths(component.date, 3);
    fixture.detectChanges();

    let currentDate = component.date;

    buttons[0].nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(differenceInMonths(component.date, currentDate)).toBe(-1);
  });

  it('should disable left month button, if date is next month', () => {
    component.date = addMonths(new Date(), 5);
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));

    expect(buttons[0].nativeNode.disabled).toBeFalse();
  });
});
