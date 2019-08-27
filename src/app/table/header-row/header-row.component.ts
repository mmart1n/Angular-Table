import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { SortingService } from '../services/sorting.service';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {
  @Input() isSortingEnable;
  private headersArr: string[];
  private toEmit = {
    field: '',
    strategy: ''
  };
  constructor(private dataService: DataService, private sortingService: SortingService) {
  }

  ngOnInit() {
    this.headersArr = this.dataService.getDataKeys();
  }

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
    this.sortingService.sortingData(this.dataService.readData(), this.toEmit.field, this.toEmit.strategy);
  }

}
