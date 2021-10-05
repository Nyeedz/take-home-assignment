import { Component, Input } from '@angular/core';

@Component({
  selector: 'planning-deposit',
  templateUrl: './planning-deposit.component.html',
  styleUrls: ['./planning-deposit.component.scss']
})
export class MonthlyDepositComponent {
  @Input() total: number = 0;
  @Input() date: Date = new Date();
}
