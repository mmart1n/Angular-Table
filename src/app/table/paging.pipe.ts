import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'paging',
})
export class PagingPipe implements PipeTransform {
    transform(value: any, currentPage: number, itemsPerPage: number) {
        // tslint:disable-next-line:no-debugger
        return value.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage );
    }
}
