import { Task } from './task';
import { checkSemicolon, stringEqualsString } from '../test-code/helpers';
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
        if (Object.keys(json).length === 35) {
            //  for(var i = 0; i < user.backpack.length; i++) {
            //      boardComputer.inventory.push(user.backpack[i]);
            //  }
            return (stringEqualsString(json[0].value, "for")
                && stringEqualsString(json[1].value, "(")
                && stringEqualsString(json[2].value, "var")
                && stringEqualsString(json[3].value, "i")
                && stringEqualsString(json[4].value, "=")
                && stringEqualsString(json[5].value, "0")
                && checkSemicolon(json[6].value)
                && stringEqualsString(json[7].value, "i")
                && stringEqualsString(json[8].value, "<")
                && stringEqualsString(json[9].value, "user")
                && stringEqualsString(json[10].value, ".")
                && stringEqualsString(json[11].value, "backpack")
                && stringEqualsString(json[12].value, ".")
                && stringEqualsString(json[13].value, "length")
                && checkSemicolon(json[14].value)
                && stringEqualsString(json[15].value, "i")
                && stringEqualsString(json[16].value, "+")
                && stringEqualsString(json[17].value, "+")
                && stringEqualsString(json[18].value, ")")
                && stringEqualsString(json[19].value, "{")
                && stringEqualsString(json[20].value, "boardComputer")
                && stringEqualsString(json[21].value, ".")
                && stringEqualsString(json[22].value, "inventory")
                && stringEqualsString(json[23].value, ".")
                && stringEqualsString(json[24].value, "push")
                && stringEqualsString(json[25].value, "(")
                && stringEqualsString(json[26].value, "user")
                && stringEqualsString(json[27].value, ".")
                && stringEqualsString(json[28].value, "backpack")
                && stringEqualsString(json[29].value, "[")
                && stringEqualsString(json[30].value, "i")
                && stringEqualsString(json[31].value, "]")
                && stringEqualsString(json[32].value, ")")
                && checkSemicolon(json[33].value)
                && stringEqualsString(json[34].value, "}"));

        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }
}