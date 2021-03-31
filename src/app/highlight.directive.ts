import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Output("appHighlight") higlighter = new EventEmitter<string>();
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }

}
