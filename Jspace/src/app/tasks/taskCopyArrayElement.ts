import { Task } from './task';
import { checkSemicolon, stringEqualsString } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskCopyArrayElement extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            7,
            "Again we use the “push”-keyword to push the aluminium-helmet to our backpack-array." + "\n" +
            "But this time we need to address the alien.backpack plus the index of the element that we want to copy!" + "\n" +
            "For instance: object.element.push(object.element[index]);",

            "Since we move in a JavaScript-galaxy we can just easily copy the item to our backpack-array." + "\n" +
            "Now go on and copy the aluminium-helmet to our backpack-array!",

            "Juhuu! We got the aluminium-helmet!",

            "Check your code! Something is wrong." + "\n" +
            "Be sure to address the right index!",

            "Good job!" + "\n" +
            "We are one step closer for collecting all the necessary material for the reparation!" + "\n" +
            "This is what we have in our backpack now: ",

            ["Error occurred! >.<" + "\n" +
                "Look! The mentor is saying something!"]
        );
    }

    testTask(json: JSON) {
        if (Object.keys(json).length === 14) {
            let user = json[0].value;
            let dot1 = json[1].value;
            let backpackUser = json[2].value;
            let dot2 = json[3].value;
            let push = json[4].value;
            let openingBracket1 = json[5].value;
            let alien = json[6].value;
            let dot3 = json[7].value;
            let backpackAlien = json[8].value;
            let openingBracket2 = json[9].value;
            let index = json[10].value;
            let closingBracket1 = json[11].value;
            let closingBracket2 = json[12].value;
            let semicolon = json[13].value;

            if ((stringEqualsString(user, "user") &&
                stringEqualsString(dot1, ".") &&
                stringEqualsString(backpackUser, "backpack") &&
                stringEqualsString(dot2, ".") &&
                stringEqualsString(push, "push") &&
                stringEqualsString(openingBracket1, "(") &&
                stringEqualsString(alien, "alien") &&
                stringEqualsString(dot3, ".") &&
                stringEqualsString(backpackAlien, "backpack") &&
                stringEqualsString(openingBracket2, "[") &&
                stringEqualsString(index, "0") &&
                stringEqualsString(closingBracket1, "]") &&
                stringEqualsString(closingBracket2, ")") &&
                checkSemicolon(semicolon))) {

                let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
                player.task = this.getTaskId() + 1;
                let alien = JSON.parse(this.localStorageService.readLocalStorage('alien'));
                player.backpack.push(alien.backpack[0]);
                this.localStorageService.saveToLocalStorage('player', player);
                let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
                this.setMessageCorrect(newMessage);

            }

            return (stringEqualsString(user, "user") &&
                stringEqualsString(dot1, ".") &&
                stringEqualsString(backpackUser, "backpack") &&
                stringEqualsString(dot2, ".") &&
                stringEqualsString(push, "push") &&
                stringEqualsString(openingBracket1, "(") &&
                stringEqualsString(alien, "alien") &&
                stringEqualsString(dot3, ".") &&
                stringEqualsString(backpackAlien, "backpack") &&
                stringEqualsString(openingBracket2, "[") &&
                stringEqualsString(index, "0") &&
                stringEqualsString(closingBracket1, "]") &&
                stringEqualsString(closingBracket2, ")") &&
                checkSemicolon(semicolon));


        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }
}