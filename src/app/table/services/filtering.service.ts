import { Subject } from 'rxjs';

export class FilteringService {

    getFilteringInfo = new Subject();
    private filteringInfo: {};
    constructor() { }

    setFilteringInfo(info: any) {
        this.filteringInfo = info;
        this.getFilteringInfo.next(this.filteringInfo);
    }

}
