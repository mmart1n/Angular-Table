import { Component, OnInit, Input } from '@angular/core';
import { DATA } from './data/data';
import { SortingService } from './services/sorting.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() sorting = false;
  private data = DATA.slice();
  private dataKeys: string[] = Object.keys(this.data[0]);
  constructor(private service: SortingService) { }

  ngOnInit() {
  }


  sortTable(event: {field: string, strategy: string}) {
    this.service.sortingData(this.data, event.field, event.strategy);
  }
}
