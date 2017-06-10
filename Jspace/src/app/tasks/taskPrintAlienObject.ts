import { Task } from './task';
import { checkSemicolon, stringEqualsString } from '../test-code/helpers';
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

        if (Object.keys(json).length === 12) {

            let consoleStr = json[0].value;
            let dot1 = json[1].value;
            let log = json[2].value;
            let openBracket1 = json[3].value;
            let jsonText = json[4].value;
            let dot2 = json[5].value;
            let stringify = json[6].value;
            let openBracket2 = json[7].value;
            let alien = json[8].value;
            let closeBracket1 = json[9].value;
            let closeBracket2 = json[10].value;
            let semicolon = json[11].value;

            if ((stringEqualsString(consoleStr, "console") && stringEqualsString(dot1, ".") && stringEqualsString(log, "log")
                && stringEqualsString(openBracket1, "(") && stringEqualsString(jsonText, "JSON") && stringEqualsString(dot2, ".")
                && stringEqualsString(stringify, "stringify") && stringEqualsString(openBracket2, "(") && stringEqualsString(alien, "alien")
                && stringEqualsString(closeBracket1, ")") && stringEqualsString(closeBracket2, ")") && checkSemicolon(semicolon))) {
                
                let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
                player.task = this.getTaskId() + 1;
                this.localStorageService.saveToLocalStorage('player', player);

                let alien = { backpack: [] };
                alien.backpack.push('Super-aluminium');
                this.localStorageService.saveToLocalStorage('alien', alien);
                let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(alien.backpack);
                this.setMessageCorrect(newMessage);
            }

            return (stringEqualsString(consoleStr, "console") && stringEqualsString(dot1, ".") && stringEqualsString(log, "log")
                && stringEqualsString(openBracket1, "(") && stringEqualsString(jsonText, "JSON") && stringEqualsString(dot2, ".")
                && stringEqualsString(stringify, "stringify") && stringEqualsString(openBracket2, "(") && stringEqualsString(alien, "alien")
                && stringEqualsString(closeBracket1, ")") && stringEqualsString(closeBracket2, ")") && checkSemicolon(semicolon));

        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }

}