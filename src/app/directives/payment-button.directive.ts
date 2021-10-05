import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { PaymentButtonColors } from '../helpers/enums/theme.enum';

@Directive({
  selector: '[payment-button]'
})
export class PaymentButtonDirective {
  constructor(renderer: Renderer2, hostElement: ElementRef) {
    const color: PaymentButtonColors = hostElement.nativeElement.getAttribute('color') || PaymentButtonColors.Primary;

    renderer.addClass(hostElement.nativeElement, 'payment-button');
    renderer.addClass(hostElement.nativeElement, `payment-${color}`);
  }
}
