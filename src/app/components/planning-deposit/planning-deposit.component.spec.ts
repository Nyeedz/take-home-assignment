/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { addMonths } from 'date-fns';
import { DifferenceInMonthsPipe } from 'src/app/pipes/difference-in-months.pipe';
import { MonthlyDepositComponent } from './planning-deposit.component';

describe('MonthlyDepositPreviewComponent', () => {
  let component: MonthlyDepositComponent;
  let fixture: ComponentFixture<MonthlyDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyDepositComponent, DifferenceInMonthsPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show monthly amout as dollars', () => {
    component.total = 25_000;
    component.date = addMonths(new Date(), 5);
    fixture.detectChanges();

    const monthlytotal = fixture.debugElement.query(By.css('.monthly-deposits span:last-child')).nativeNode.textContent;

    expect(monthlytotal).toEqual('$5,000');
  });

  it('use plural if date is over two months from now', () => {
    component.total = 25_000;
    component.date = addMonths(new Date(), 5);
    fixture.detectChanges();

    const text = fixture.debugElement.query(By.css('.monthly-deposits-help-text p strong:first-of-type')).nativeNode.textContent;

    expect(text).toEqual('5 monthly deposits');
  });
});
