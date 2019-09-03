import { Component, OnInit, Input } from '@angular/core';
import { DATA } from './data/data';
import { PagingService } from './services/paging.service';
import { SortingService } from './services/sorting.service';
import { FilteringService } from './services/filtering.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [PagingService, SortingService, FilteringService]
})
export class TableComponent implements OnInit {
  @Input() sorting = false;
  @Input() filtering = false;
  @Input() paging = false;
  @Input() perPage = 5;
  private data;
  private headerKeys;
  constructor(private pagingService: PagingService) { }

  ngOnInit() {
    this.data = DATA;
    this.pagingService.dataLength = this.data.length;
    this.headerKeys = Object.keys(this.data[0]);
    this.pagingService.totalPages = this.data.length;
    if (this.paging) {
      this.pagingService.itemsPerPage = this.perPage;
    } else {
      this.pagingService.itemsPerPage = this.data.length;
    }
  }

}
