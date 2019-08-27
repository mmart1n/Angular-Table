import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DATA } from './data/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private data = DATA.slice();
  private dataKeys: string[] = Object.keys(this.data[0]);
  constructor() { }

  ngOnInit() {
  }

  sortTable(event: {field: string, strategy: string}) {
    if (event.strategy !== '') {
      this.data.sort((a, b) => {
        if (typeof a[event.field] === 'string') {
          if (event.strategy === 'ascending') {
            return a[event.field].localeCompare(b[event.field]);
          } else {
            return b[event.field].localeCompare(a[event.field]);
          }
        } else {
          if (event.strategy === 'ascending') {
            return a[event.field] - b[event.field];
          } else {
            return b[event.field] - a[event.field];
          }
        }
      });
    } else {
      this.data = DATA.slice();
    }
  }

}
