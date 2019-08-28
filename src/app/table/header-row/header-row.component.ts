import { Component, OnInit, Input } from '@angular/core';
import { SortingService } from '../services/sorting.service';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {
  @Input() isSortingEnable;
  @Input() headersArr: string[];
  private toEmit = {
    field: '',
    strategy: ''
  };
  constructor(private sortingService: SortingService) {
  }

  ngOnInit() { }

  sortTable(fieldName) {
    if (fieldName !== this.toEmit.field) {
      this.toEmit.field = fieldName;
      this.toEmit.strategy = '';
    }
    if (this.toEmit.strategy === '') {
      this.toEmit.strategy = 'ascending';
    } else if (this.toEmit.strategy === 'ascending') {
      this.toEmit.strategy = 'descending';
    } else {
      this.toEmit.strategy = '';
      this.toEmit.field = '';
    }
    this.sortingService.sortingData(this.toEmit.field, this.toEmit.strategy);
  }

}
