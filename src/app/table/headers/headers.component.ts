import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  @Input() isSortingEnable = false;
  @Input() tableHeadersArr: string[];
  @Output() sortingStrategy = new EventEmitter();
  private showSortingIcon = false;
  private toEmit = {
    field: '',
    strategy: ''
  };
  constructor() { }

  ngOnInit() {
  }

  showIcon(el) {
    console.log(el);
    this.showSortingIcon = !this.showSortingIcon;
  }

  hideIcon() {
    this.showSortingIcon = !this.showSortingIcon;
  }

  sorting(fieldName) {
    if (fieldName !== this.toEmit.field) {
      this.toEmit.field = fieldName;
      this.toEmit.strategy = '';
    }
    if (this.toEmit.strategy === '') {
      this.toEmit.strategy = 'ascending';
      this.sortingStrategy.emit(this.toEmit);
    } else if (this.toEmit.strategy === 'ascending') {
      this.toEmit.strategy = 'descending';
      this.sortingStrategy.emit(this.toEmit);
    } else {
      this.toEmit.strategy = '';
      this.sortingStrategy.emit(this.toEmit);
    }
  }

}
