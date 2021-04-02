import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
