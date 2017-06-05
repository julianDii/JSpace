import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskAddArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            4,
            "", "", "", "", "",
            [""]
        );
    }

    testTask(json: JSON) {
        return true;
    }
}