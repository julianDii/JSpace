import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskLoopArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            8,
            "", "", "", "", "",
            [""]
        );
    }

    testTask(json: JSON) {
        return true;
    }
}