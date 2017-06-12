import { Task } from './task';
import { checkSemicolon, stringEqualsString } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskAddArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            4,
            "You can add elements as variables to your object by simply assigning them." + "\n" +
            "object.element = value; " + "\n" +
            "An array-element might be a good choice." + "\n" +
            "We should name our array 'backpack'. And don't forget that the user (simply you) is an object!",

            "It seems like you lost your backpack. Well then let us make you a new one.",

            "Done! We can now store all the items we need in our backpack.",

            "Try again! Something went wrong with your code." + "\n" +
            "The array must be empty! A little more help?" + "\n" +
            "The input should look like this: " + "\n" + "object.element = []; (you need to replace object and element for sure)",

            "Nice! Now we have an empty backpack to store our stuff in.",

            ["Error! Try it again and check if you really used the right keywords." + "\n" + "Maybe the mentor knows more?"]
        );
    }

    testTask(json: JSON) {
        if (Object.keys(json).length === 7) {
            let user = json[0].value;
            let dot = json[1].value;
            let backpack = json[2].value;
            let equalSign = json[3].value;
            let firstBracket = json[4].value;
            let secondBracket = json[5].value;
            let semicolon = json[6].value;

            if ((stringEqualsString(user, "user") &&
                stringEqualsString(dot, ".") &&
                stringEqualsString(backpack, "backpack") &&
                stringEqualsString(equalSign, "=") &&
                stringEqualsString(firstBracket, "[") &&
                stringEqualsString(secondBracket, "]") &&
                checkSemicolon(semicolon))) {

                let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
                player.task = this.getTaskId() + 1;
                player['backpack'] = [];
                this.localStorageService.saveToLocalStorage('player', player);
                delete player.task;
                let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
                this.setMessageCorrect(newMessage);

            }

            return (stringEqualsString(user, "user") &&
                stringEqualsString(dot, ".") &&
                stringEqualsString(backpack, "backpack") &&
                stringEqualsString(equalSign, "=") &&
                stringEqualsString(firstBracket, "[") &&
                stringEqualsString(secondBracket, "]") &&
                checkSemicolon(semicolon));

        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }
}
