import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortingService } from '../services/sorting.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() wholeData: any[];
  private sortingSubscription: Subscription;
  private toEmit = {
    field: '',
    strategy: ''
  };
  constructor(private sortingService: SortingService) { }

  ngOnInit() {
    this.sortingSubscription = this.sortingService.dataSubject.subscribe(({field, strategy}: {field: string, strategy: string}) => {
      this.toEmit.field = field;
      this.toEmit.strategy = strategy;
    });
  }

}
