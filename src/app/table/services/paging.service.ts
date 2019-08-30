import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export class PagingService {
    getCurrentPage = new Subject();
    // tslint:disable-next-line:variable-name
    private _currentPage: number;
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
    }

    get itemsPerPage() {
        return this._itemsPerPage;
    }

    set totalPages(totalPages) {
        this._totalPages = totalPages;
    }

    get totalPages(): number {
        return this._totalPages;
    }

}
