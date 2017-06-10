import { Task } from './task';
import { } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskLoopArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            8,
            "Despite having a lot of options for different loops, I will show you the for-loop. " + "\n" +
            "It works as follows: " + "\n" +
            "for (statement1; statement2; statement3) { code block to be executed } " + "\n" + 
            "Statement 1 is executed before the loop (the code block) starts." + "\n" + 
            "Statement 2 defines the condition for running the loop (the code block)." + "\n" + 
            "Statement 3 is executed each time after the loop (the code block) has been executed." + "\n" +
            "For instance:  " + "\n" + "for (var i = 0; i < user.backpack.length; i ++) { boardComputer.inventory.push(user.backpack[i]);}",

            "Time to transfer our items to the board computer." + "\n" +
            "So that it can calculate the amount of resources and time that we need to repair" + "\n" + "the ship." + "\n" +
            "Push the items from our backpack to the inventory of the board computer with a" + "\n" + 
            "for-loop.",

            "Transaction complete! All Materials collected.",

            "Transaction incomplete! Check your script.",

            "Yippieh! Time to repair the ship and leave the planet!",

            ["Bzzzt! Try again and make sure to address the user’s backpack for the iteration!"]
        );
    }

    testTask(json: JSON) {
        if (true) {
            let boardcomputer = { inventory: [] }
            let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
            player.task = this.getTaskId() + 1;

            for (var i = 0; i < player.backpack.length; i++) {
                boardcomputer.inventory.push(player.backpack[i]);
            }
            player.backpack = [];
            this.localStorageService.saveToLocalStorage('player', player);
            this.localStorageService.saveToLocalStorage('boardcomputer', boardcomputer);

            let newMessage = this.getMessageCorrect()
                + "\n" + "BOARDCOMPUTER: " + JSON.stringify(boardcomputer.inventory);
                   
            this.setMessageCorrect(newMessage);
            this.localStorageService.resetLocalStorageItem('player');
        }
        return true;
    }
}