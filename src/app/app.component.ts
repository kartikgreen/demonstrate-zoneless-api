import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  ViewChild
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild("btn") btnEl: ElementRef<HTMLButtonElement>;

  constructor(
    private readonly zone: NgZone,
    private readonly renderer: Renderer2
  ) { }

  onClick() {
    console.log("onClick");
  }

  ngAfterViewInit() {
    this.setupClickListener();
  }

  ngAfterViewChecked() {
    console.log("CD performed");
  }

  private setupClickListener() {
    this.zone.runOutsideAngular(() => {
      this.setupClickListenerViaRenderer();
    });
  }
  private setupClickListenerViaRenderer() {
    this.renderer.listen(this.btnEl.nativeElement, "click", () => {
      console.log("onClick");
    });
  }
}