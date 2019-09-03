import { Subject } from 'rxjs';

export class PagingService {
    getItemsPerPage = new Subject();
    getCurrentPage = new Subject();
    getTotalPages = new Subject();
    // tslint:disable-next-line:variable-name
    private _dataLength: number;
    // tslint:disable-next-line:variable-name
    private _currentPage = 1;
    // tslint:disable-next-line:variable-name
    private _itemsPerPage: number;
    // tslint:disable-next-line:variable-name
    private _totalPages: number;

    set currentPage(currentPage) {
        if (currentPage > 1) {
            this._currentPage = currentPage;
        } else {
            this._currentPage = 1;
        }
        this.getCurrentPage.next(this._currentPage);
    }

    get currentPage() {
        return this._currentPage;
    }

    set itemsPerPage(items: number) {
        this._itemsPerPage = items;
        this.totalPages = 5;
        this.getItemsPerPage.next(this._itemsPerPage);
    }

    get itemsPerPage() {
        return this._itemsPerPage;
    }

    set totalPages(pages) {
        this._totalPages = Math.ceil(this._dataLength / this.itemsPerPage);
        this.getTotalPages.next(this._totalPages);
        if (this.currentPage > this._totalPages) {
            this.currentPage = this._totalPages;
        }
    }

    get totalPages(): number {
        return this._totalPages;
    }

    set dataLength(length) {
        this._dataLength = length;
    }

    get dataLength() {
        return this._dataLength;
    }

}
