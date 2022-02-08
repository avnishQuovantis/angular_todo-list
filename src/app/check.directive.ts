import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';

@Directive({
  selector: '[appCheck]',
})
export class CheckDirective {
  @Input() set appUnless(condition: boolean) {}

  constructor(
    private tempRef: TemplateRef<any>,
    private vcref: ViewContainerRef
  ) {}
}
