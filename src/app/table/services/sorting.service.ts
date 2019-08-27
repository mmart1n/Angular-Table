import { Subject } from 'rxjs';

export class SortingService {
    dataSubject = new Subject<{}>();
    sortingData(data, field, strategy) {
        if (strategy !== '') {
            data.sort((a, b) => {
              if (typeof a[field] === 'string') {
                if (strategy === 'ascending') {
                  return a[field].localeCompare(b[field]);
                } else {
                  return b[field].localeCompare(a[field]);
                }
              } else {
                if (strategy === 'ascending') {
                  return a[field] - b[field];
                } else {
                  return b[field] - a[field];
                }
              }
            });
        } else {
            data = data.slice();
        }
    }
}
