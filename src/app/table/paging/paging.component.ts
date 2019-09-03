import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PagingService } from '../services/paging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, AfterViewInit {
  private currentPage = 1;
  @Output() pageIndex = new EventEmitter();
  private totalPagesSubcription: Subscription;
  private totalPages: number;
  private itemsPerPageOptions: number[];
  @Input()private itemsPerPage = 3;
  @ViewChild('prev', {static: false}) previousButton: ElementRef;
  @ViewChild('next', {static: false}) nextButton: ElementRef;
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
  }

  ngAfterViewInit() {
    if (this.currentPage <= 1) {
      this.previousButton.nativeElement.disabled = true;
    } else {
      this.previousButton.nativeElement.disabled = false;
    }
    if (this.currentPage >= this.totalPages) {
      this.nextButton.nativeElement.disabled = true;
    } else {
      this.nextButton.nativeElement.disabled = false;
    }
    this.toNumber();
  }

  goToPrevPage() {
    this.currentPage--;
    this.pageIndex.emit(this.currentPage);
    this.pagingService.currentPage = this.currentPage;
    this.disableButtons();
  }

  goToNextPage() {
    this.currentPage++;
    this.pageIndex.emit(this.currentPage);
    this.pagingService.currentPage = this.currentPage;
    this.disableButtons();
  }

  toNumber() {
    this.pagingService.itemsPerPage = this.itemsPerPage;
    this.currentPage = this.pagingService.currentPage;
    this.disableButtons();
  }

  disableButtons() {
    if (this.currentPage <= 1) {
      this.previousButton.nativeElement.disabled = true;
    } else {
      this.previousButton.nativeElement.disabled = false;
    }
    if (this.currentPage >= this.totalPages) {
      this.nextButton.nativeElement.disabled = true;
    } else {
      this.nextButton.nativeElement.disabled = false;
    }
  }

}
