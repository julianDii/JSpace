import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskElementToArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            5,
            "The push() method adds new items to the end of an array, and returns the new length. Note: The new item(s) will be added at the end of the array. " + "\n" +
            " Note: This method changes the length of the array. An example could be: user.backpack.push(“Monster-Juice”);",

            "Cool! We met some nice aliens who are willing to trade with us." + "\n" +
            "Before we accept the great offer, we will first need to push a new “Aluminium-shard”- element to the array." + "\n" +
            "For this, we got to address the array first and push a new element to it.",

            "Well done! You now added an element to your array. Let’s move on.",
            "Something went wrong when adding the element. Try again!",
            "Nice! Here your backpack with the added element.",
            ["Doh! Are you sure that you used the correct keyword? Remember that we need an Aluminium-shard element!"]
        );
    }

    testTask(json: JSON) {
        if (true) {
            let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
            player.task = this.getTaskId() + 1;
            player.backpack.push('Aluminium-shard');
            this.localStorageService.saveToLocalStorage('player', player);
            let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
            this.setMessageCorrect(newMessage);
        }
        return true;
    }
}