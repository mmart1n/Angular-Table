import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SortingService } from '../../services/sorting.service';

@Component({
  selector: 'app-header-cells',
  templateUrl: './header-cells.component.html',
  styleUrls: ['./header-cells.component.scss']
})
export class HeaderCellsComponent implements OnInit {
  @Input() headerName: any;
  @Input() isSorting: boolean;
  @Input() sortingInfo: {};
  @Output() fieldToBeSorted = new EventEmitter();
  constructor(private sortingService: SortingService) { }

  ngOnInit() {
  }

  chooseFieldToSort() {
    this.fieldToBeSorted.emit(this.headerName);
  }

}
