import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskAddArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            4,
            "You can add elements as variables to your object by simply assigning them." + "\n" +
            "object.element = value; " + "\n" +
            "An array might be a good choice for your backpack object.array = [];",

            "It seems like you lost your backpack. Well then let us make you a new one.",

            "Done! We can now store all the items we need in our backpack.",

            "Try again! Something went wrong with your code.",

            "Nice! This is your empty backpack.",

            ["Error! Try it again and check if you really used the right keywords.The array must be empty!"]
        );
    }

    testTask(json: JSON) {
        if (true) {
            let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
            player.task = this.getTaskId() + 1;
            player['backpack'] = [];
            this.localStorageService.saveToLocalStorage('player', player);
            delete player.task;
            let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
            this.setMessageCorrect(newMessage);
        }
        return true;
    }
}