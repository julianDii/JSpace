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
            "An array might be a good choice for your backpack object.array = [];",

            "It seems like you lost your backpack. Well then let us make you a new " + "\n" + "one.",

            "Done! We can now store all the items we need in our backpack.",

            "Try again! Something went wrong with your code.",

            "Nice! This is your empty backpack.",

            ["Error! Try it again and check if you really used the right keywords." + "\n" + "The array must be empty!"]
        );
    }

    testTask(json: JSON) {
        if (Object.keys(json).length === 7) {
            return (stringEqualsString(json[0].value, "user")
                && stringEqualsString(json[1].value, ".")
                && stringEqualsString(json[2].value, "backpack")
                && stringEqualsString(json[3].value, "=")
                && stringEqualsString(json[4].value, "[")
                && stringEqualsString(json[5].value, "]")
                && checkSemicolon(json[6].value));

        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }
}