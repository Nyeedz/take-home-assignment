/* tslint:disable:no-unused-variable */

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PaymentButtonDirective } from './payment-button.directive';

describe('PaymentButton: Directive', () => {
  let fixture: ComponentFixture<PaymentButtonComponent>;
  let buttons: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [PaymentButtonDirective, PaymentButtonComponent]
    }).createComponent(PaymentButtonComponent);

    fixture.detectChanges();
    buttons = fixture.debugElement.queryAll(By.directive(PaymentButtonDirective));
  });

  it('should add .payment-primary to button', () => {
    const hasClass = buttons[0].nativeNode.classList.contains('payment-primary');

    expect(hasClass).toBeTrue();
  });

  it('should all buttons have .payment-button class', () => {
    const buttonsClass = buttons.filter(button => button.nativeNode.classList.contains('payment-button'));

    expect(buttonsClass.length).toBe(2);
  });
});

@Component({
  template: `
    <button payment-button>Confirmar</button>
    <button payment-button color="secondary">Confirmar</button>
  `
})
class PaymentButtonComponent {}
