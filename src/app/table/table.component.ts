import { Component, OnInit, Input } from '@angular/core';
import { DATA } from './data/data';
import { SortingService } from './services/sorting.service';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() sorting = false;
  private data: any[];
  private dataObservable: Subscription;
  private dataKeys: string[];
  constructor(private dataService: DataService, private service: SortingService) { }

  ngOnInit() {
    this.data = this.dataService.readData();
    this.dataKeys = Object.keys(this.data[0]);
    this.dataObservable = this.service.dataSubject.subscribe((data: any[]) => {
      this.data = data;
    });
  }

  sortTable(event: {field: string, strategy: string}) {
    this.service.sortingData(this.data, event.field, event.strategy);
  }

}
