import { Component } from '@angular/core';
import { addMonths } from 'date-fns';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {
  total: number = 0;
  date: Date = addMonths(new Date(), 1);
}
