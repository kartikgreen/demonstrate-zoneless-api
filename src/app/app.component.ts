import { AfterViewChecked, Component, NgZone } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewChecked {

  constructor(private readonly zone: NgZone) { }

  onClick() {
    console.log("onClick event...");
  }

  ngAfterViewChecked() {
    console.log("CD performed");
  }
}