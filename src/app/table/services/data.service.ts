import { DATA } from '../data/data';

export class DataService {

    readData() {
        return DATA.slice();
    }

    addNewRecord(record: {}) {
        DATA.push(record);
        return DATA.slice();
    }

    getDataKeys() {
        return Object.keys(DATA[0]).slice();
    }

}
