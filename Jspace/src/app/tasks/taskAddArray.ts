import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskAddArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            4,
            "task4", "add array", "correct", "wrong", "correct",
            ["wrong"]
        );
    }

    testTask(json: JSON) {
      let codeCorrect: boolean = true;

      if (codeCorrect) {
        let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
        player.task = this.getTaskId() + 1;
        player['backpack'] = [];
        this.localStorageService.saveToLocalStorage('player', player);
        delete player.task;
        let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player);
        this.setMessageCorrect(newMessage);
      }
      return codeCorrect;
    }
}
