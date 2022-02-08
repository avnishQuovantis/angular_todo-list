import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.opacity') opacity: number = 1;
  constructor() {}
  @HostListener('mouseleave') mouseLeave(event) {
    this.opacity = 1;
  }
  @HostListener('mouseenter') mouseEnter(event) {
    this.opacity = 0.8;
  }
}
