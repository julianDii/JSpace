import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskPrintPlayerObject extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            3,
            "Objects are variables. But objects can contain many values.Something like:" + "\n" +
            "var spacecraft = {model:“Columbia“, weight:“3600kg“};" + "\n" +
            "The easiest way to print an Object is:" + "\n" +
            "console.log(JSON.stringify(Object));" + "\n" +
            "Your Object, is stored within the Variable user.",

            "Try to print your user object to the console",

            "Nice You got it!",

            "Ups! Something went wrong",

            "user",

            ["Error1"]
        );
    }

    testTask(json: JSON) {

        // True has to be replaced with validation!
        if (true) {
            let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
            delete player.task;
            let newMessage = this.getMessageCorrect() + JSON.stringify(player);
            this.setMessageCorrect(newMessage);
        }
        return true;
    }
}