import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskCopyArrayElement extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            6,
            "", "", "", "", "",
            [""]
        );
    }

    testTask(json: JSON) {
        return true;
    }
}