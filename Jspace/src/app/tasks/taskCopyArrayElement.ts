import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskCopyArrayElement extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            7,
            "Again we use the “push”-keyword to do so." + "\n" +
            "But this time we need to address the alien.backpack plus the index of the element that we want to copy! For instance: user.backpack.push(alien.backpack[index]);",

            "What a coincidence! The alien has a aluminium helmet in his backpack that we can use to repair our space ship! Since we move in a JavaScript-galaxy we can just easily copy the item to our backpack-array.",

            "Juhuu! We got the Super-aluminium.",

            "Check your code! Something is wrong.",

            "Good job!" + "\n" +
            "We are one step closer for collecting all the necessary material for the reparation!",

            ["Error occurred! >.< Be sure to address the right index! We only need the aluminium helmet."]
        );
    }

    testTask(json: JSON) {
        if (true) {
            let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
            player.task = this.getTaskId() + 1;
            let alien = JSON.parse(this.localStorageService.readLocalStorage('alien'));
            player.backpack[1] = alien.backpack[0];
            this.localStorageService.saveToLocalStorage('player', player);
            let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
            this.setMessageCorrect(newMessage);
        }
        return true;
    }
}