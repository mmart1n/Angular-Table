import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  pure: false
})
export class SortingPipe implements PipeTransform {

  transform(data: any, field, strategy): any {
    if (data.length === 0 || strategy === '') {
      return data;
    } else {
      return data.sort((a, b) => {
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
    }
  }

}
