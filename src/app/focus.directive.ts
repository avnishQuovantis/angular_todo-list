import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective {
  @HostBinding('style.transform') scale = 'scale(1)';
  constructor() {}
  @HostListener('mouseenter') mouseEnter(event) {
    this.scale = 'scale(1.4)';
  }
  @HostListener('mouseleave') mouseLeave(event) {
    this.scale = 'scale(1)';
  }
}
