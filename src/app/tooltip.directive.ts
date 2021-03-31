import { Directive, ElementRef, NgZone, OnInit } from "@angular/core";
import tippy from "tippy.js";

@Directive({
  selector: "[appTooltip]"
})
export class TooltipDirective implements OnInit {
  constructor(private readonly zone: NgZone, private readonly el: ElementRef) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.setupTooltip();
    });
  }

  private setupTooltip() {
    tippy(this.el.nativeElement, {
      content: "Bazuga smokin!"
    });
  }
}
