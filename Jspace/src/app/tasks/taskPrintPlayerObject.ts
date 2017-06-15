import { Task } from './task';
import { checkSemicolon, stringEqualsString } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskPrintPlayerObject extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            3,
            "Objects are variables. But objects can contain many values. Something like:" + "\n" +
            "var spacecraft = {model:“Columbia“, weight:“3600kg“};" + "\n" +
            "The easiest way to print an object is:" + "\n" +
            "console.log(JSON.stringify(Object));" + "\n" +
            "Your object, is stored within the variable user.",

            "I just made a system check and it seems like we need more aluminium to repair our spaceship." + "\n" +
            "\n" + "Please check if you still have your backpack - maybe it contains the required material.",

            "Fabulous! It worked. Move on to the next task.",

            "Try to print your player object again",

            "This is the pilot object: " + "\n",

            "Ugh! A terrible error occurred. Check what the mentor is saying!"
        );
    }

    testTask(json: JSON) {
        if (Object.keys(json).length === 12) {
            let consoleStr = json[0].value;
            let dot1 = json[1].value;
            let log = json[2].value;
            let firstBracket = json[3].value;
            let jsonText = json[4].value;
            let dot2 = json[5].value;
            let stringify = json[6].value;
            let secondBracket = json[7].value;
            let user = json[8].value;
            let thirdBracket = json[9].value;
            let fourthBracket = json[10].value;
            let semicolon = json[11].value;

            if ((stringEqualsString(consoleStr, "console") &&
                stringEqualsString(dot1, ".") &&
                stringEqualsString(log, "log") &&
                stringEqualsString(firstBracket, "(") &&
                stringEqualsString(jsonText, "JSON") &&
                stringEqualsString(dot2, ".") &&
                stringEqualsString(stringify, "stringify") &&
                stringEqualsString(secondBracket, "(") &&
                stringEqualsString(user, "user") &&
                stringEqualsString(thirdBracket, ")") &&
                stringEqualsString(fourthBracket, ")") &&
                checkSemicolon(semicolon))) {

                let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
                player.task = this.getTaskId() + 1;
                this.localStorageService.saveToLocalStorage('player', player);
                delete player.task;
                let newMessage = this.getMessageCorrect() + JSON.stringify(player);
                this.setMessageCorrect(newMessage);

            }

            return (stringEqualsString(consoleStr, "console") &&
                stringEqualsString(dot1, ".") &&
                stringEqualsString(log, "log") &&
                stringEqualsString(firstBracket, "(") &&
                stringEqualsString(jsonText, "JSON") &&
                stringEqualsString(dot2, ".") &&
                stringEqualsString(stringify, "stringify") &&
                stringEqualsString(secondBracket, "(") &&
                stringEqualsString(user, "user") &&
                stringEqualsString(thirdBracket, ")") &&
                stringEqualsString(fourthBracket, ")") &&
                checkSemicolon(semicolon));



        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }
}
