import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskPrintAlienObject extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            6,
            "Print out the Alien object.",

            "The friendly alien offers us to look into his bag! " +
            "We can make use of the " + "\n" + "stringify-function of JSON again." + "\n" +
            "It is quite easy, you already used this function recently. Use it again " + "\n" + "to see what the alien-object has to offer.",

            "Wohooo! The alien has some useful stuff that we can get!",
            "Did you really used the command like before and with alien?",
            "Great this is the alien bacckpack: ",
            ["Wah! It didn’t work! Put the right object name into the brackets? " + "\n" + "Always check twice!"]
        );
    }

    testTask(json: JSON) {
        if (true) {
            let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
            player.task = this.getTaskId() + 1;
            this.localStorageService.saveToLocalStorage('player', player);

            let alien = {backpack:[]};
            alien.backpack.push('Super-aluminium');
            this.localStorageService.saveToLocalStorage('alien', alien);
            let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(alien.backpack);
            this.setMessageCorrect(newMessage);
        }

        return true;
    }
}