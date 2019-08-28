import { Component, OnInit, Input } from '@angular/core';
import { DATA } from './data/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() sorting = false;
  private data;
  private headerKeys;
  constructor() { }

  ngOnInit() {
    this.data = DATA;
    this.headerKeys = Object.keys(this.data[0]);
  }

}
