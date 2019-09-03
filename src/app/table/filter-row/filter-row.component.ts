import { Component, OnInit, Input } from '@angular/core';
import { filter } from 'minimatch';
import { FilteringService } from '../services/filtering.service';

@Component({
  selector: 'app-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.scss']
})
export class FilterRowComponent implements OnInit {
  @Input() headersArr: string[];

  private filterInfo = {};
  constructor(private filteringService: FilteringService) { }

  ngOnInit() {
    this.headersArr.forEach((x) => this.filterInfo[x] = '');
  }

  change() {
    this.filteringService.setFilteringInfo(this.filterInfo);
  }

}
