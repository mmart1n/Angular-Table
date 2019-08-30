import { Component, OnInit, Input } from '@angular/core';
import { DATA } from './data/data';
import { PagingService } from './services/paging.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() sorting = false;
  @Input() paging = false;
  @Input() perPage = 10;
  private totalPages;
  private data;
  private headerKeys;
  constructor(private pagingService: PagingService) { }

  ngOnInit() {
    this.data = DATA;
    this.headerKeys = Object.keys(this.data[0]);
    this.totalPages = Math.ceil(this.data.length / this.perPage);
    this.pagingService.totalPages = this.totalPages;
    if (this.paging) {
      this.pagingService.itemsPerPage = this.perPage;
    } else {
      this.pagingService.itemsPerPage = this.data.length;
    }
  }

}
