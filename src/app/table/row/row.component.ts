import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortingService } from '../services/sorting.service';
import { PagingService } from '../services/paging.service';
import { FilteringService } from '../services/filtering.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() wholeData: any[];
  @Input() paging = false;
  private recordsPerPageSubscription: Subscription;
  private recordsPerPage: number;
  private currentPage: number;
  private currentPageSubscription: Subscription;
  private sortingSubscription: Subscription;
  private filteringInfo: {};
  private filteringInfoSubscription: Subscription;
  private toEmit = {
    field: '',
    strategy: ''
  };
  constructor(private sortingService: SortingService, private pagingService: PagingService, private filteringService: FilteringService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.sortingSubscription = this.sortingService.dataSubject.subscribe(({field, strategy}: {field: string, strategy: string}) => {
      this.toEmit.field = field;
      this.toEmit.strategy = strategy;
    });
    this.currentPageSubscription = this.pagingService.getCurrentPage.subscribe((currPage: number) => {
      this.currentPage = currPage;
    });
    this.recordsPerPageSubscription = this.pagingService.getItemsPerPage.subscribe((items: number) => {
      this.recordsPerPage = items;
    });
    this.filteringInfoSubscription = this.filteringService.getFilteringInfo.subscribe((info) => {
      this.filteringInfo = info;
    });
  }

}
