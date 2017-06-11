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
            "The easiest way to print an Object is:" + "\n" +
            "console.log(JSON.stringify(Object));" + "\n" +
            "Your Object, is stored within the Variable user.",

            "I just made a system check and it seems like we need more aluminium to " + "\n" + "repair  our spaceship." + "\n" +
            "\n" + "Please check if you still have your backpack - maybe it contains the " + "\n" + "required material.",

            "Fabulous! It worked. Move on to the next task.",

            "Try to print your player object again",

            "This is the your pilot object: ",

            ["Ugh! A terrible error occurred. Check what the mentor is saying!"]
        );
    }

    testTask(json: JSON) {
        if (Object.keys(json).length === 12) {
            return (stringEqualsString(json[0].value, "console")
                && stringEqualsString(json[1].value, ".")
                && stringEqualsString(json[2].value, "log")
                && stringEqualsString(json[3].value, "(")
                && stringEqualsString(json[4].value, "JSON")
                && stringEqualsString(json[5].value, ".")
                && stringEqualsString(json[6].value, "stringify")
                && stringEqualsString(json[7].value, "(")
                && stringEqualsString(json[8].value, "user")
                && stringEqualsString(json[9].value, ")")
                && stringEqualsString(json[10].value, ")")
                && checkSemicolon(json[11].value));

        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }
}