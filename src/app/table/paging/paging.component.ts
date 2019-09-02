import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PagingService } from '../services/paging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  private currentPage = 1;
  @Output() pageIndex = new EventEmitter();
  private totalPagesSubcription: Subscription;
  private totalPages: number;
  private itemsPerPageOptions: number[];
  @Input()private itemsPerPage = 3;
  constructor(private pagingService: PagingService) { }

  ngOnInit() {
    this.pageIndex.emit(this.currentPage);
    this.totalPagesSubcription = this.pagingService.getTotalPages.subscribe((allPages: number) => {
      this.totalPages = allPages;
    });
    this.itemsPerPageOptions = [5, 10, 15, 20, 50, 100];
    if (this.itemsPerPage !== 5) {
      this.itemsPerPageOptions.splice(0, 0, this.itemsPerPage);
    }
    this.toNumber();
  }

  goToPrevPage() {
    this.currentPage--;
    this.pageIndex.emit(this.currentPage);
    this.pagingService.currentPage = this.currentPage;
  }

  goToNextPage() {
    this.currentPage++;
    this.pageIndex.emit(this.currentPage);
    this.pagingService.currentPage = this.currentPage;
  }

  toNumber() {
    this.pagingService.itemsPerPage = this.itemsPerPage;
  }

}
