import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MonthlyDepositComponent } from './components/planning-deposit/planning-deposit.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentButtonDirective } from './directives/payment-button.directive';
import { IsNextMonthPipe } from './pipes/is-next-month.pipe';
import { MonthInputComponent } from './components/month-input/month-input.component';
import { DifferenceInMonthsPipe } from './pipes/difference-in-months.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentCardComponent,
    MonthlyDepositComponent,
    PaymentFormComponent,
    PaymentButtonDirective,
    MonthInputComponent,
    IsNextMonthPipe,
    DifferenceInMonthsPipe
  ],
  imports: [BrowserModule, NgxMaskModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
