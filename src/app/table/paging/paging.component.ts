import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PagingService } from '../services/paging.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  private currentPage = 1;
  @Output() pageIndex = new EventEmitter();
  private totalPages: number;
  constructor(private pagingService: PagingService) { }

  ngOnInit() {
    this.pageIndex.emit(this.currentPage);
    this.totalPages = this.pagingService.totalPages;
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

}
