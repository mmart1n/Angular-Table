import { Subject } from 'rxjs';

export class SortingService {

  dataSubject = new Subject<{}>();

  constructor() { }

  sortingData(fieldName, strategyType) {
    this.dataSubject.next({field: fieldName, strategy: strategyType});
  }

}
