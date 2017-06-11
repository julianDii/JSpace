import { Task } from './task';
import { checkSemicolon, stringEqualsString } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskCopyArrayElement extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            7,
            "Again we use the “push”-keyword to do so." + "\n" +
            "But this time we need to address the alien.backpack plus the index of the element that we want to copy!" + "\n" +
            "For instance: user.backpack.push(alien.backpack[index]);",

            "What a coincidence!" + "\n" +
            "The alien has a aluminium helmet in his backpack that we can use to repair our " + "\n" +
            "space ship! Since we move in a JavaScript-galaxy we can just easily copy the " + "\n" +
            "item to our backpack-array.",

            "Juhuu! We got the Super-aluminium.",

            "Check your code! Something is wrong.",

            "Good job!" + "\n" +
            "We are one step closer for collecting all the necessary material for the reparation!",

            ["Error occurred! >.< Be sure to address the right index! We only need the " + "\n" +
                "aluminium helmet."]
        );
    }

    testTask(json: JSON) {
        if (Object.keys(json).length === 14) {
            return (stringEqualsString(json[0].value, "user")
                && stringEqualsString(json[1].value, ".")
                && stringEqualsString(json[2].value, "backpack")
                && stringEqualsString(json[3].value, ".")
                && stringEqualsString(json[4].value, "push")
                && stringEqualsString(json[5].value, "(")
                && stringEqualsString(json[6].value, "alien")
                && stringEqualsString(json[7].value, ".")
                && stringEqualsString(json[8].value, "backpack")
                && stringEqualsString(json[9].value, "[")
                && stringEqualsString(json[10].value, "0")
                && stringEqualsString(json[11].value, "]")
                && stringEqualsString(json[12].value, ")")
                && checkSemicolon(json[13].value)

                ||

                stringEqualsString(json[0].value, "user")
                && stringEqualsString(json[1].value, ".")
                && stringEqualsString(json[2].value, "backpack")
                && stringEqualsString(json[3].value, "[")
                && stringEqualsString(json[4].value, "0")
                && stringEqualsString(json[5].value, "]")
                && stringEqualsString(json[6].value, "=")
                && stringEqualsString(json[7].value, "alien")
                && stringEqualsString(json[8].value, ".")
                && stringEqualsString(json[9].value, "backpack")
                && stringEqualsString(json[10].value, "[")
                && stringEqualsString(json[11].value, "0")
                && stringEqualsString(json[12].value, "]")
                && checkSemicolon(json[13].value)

            );

        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }
}