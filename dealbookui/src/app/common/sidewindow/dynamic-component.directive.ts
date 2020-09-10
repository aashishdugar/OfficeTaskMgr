import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-host]'
})
export class DynamicComponentDirective {
  constructor(public vcr: ViewContainerRef) {
  }
}
