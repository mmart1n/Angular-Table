import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() record: any;
  private values;
  constructor() { }

  ngOnInit() {
    this.values = Object.values(this.record);
  }

}
