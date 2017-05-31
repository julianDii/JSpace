import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskPrintPlayerObject extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            3,
            "", "", "", "", "",
            [""]
        );
    }

    testTask(json: JSON) {

        if (true) {
            let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
            delete player.task;
            let newMessage = this.getMessageCorrect() + JSON.stringify(player);
            this.setMessageCorrect(newMessage);
        }
        return true;
    }
}