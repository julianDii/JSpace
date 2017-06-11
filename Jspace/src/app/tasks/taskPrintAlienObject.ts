import { Task } from './task';
import {checkFirstLetter, checkSemicolon, stringEqualsString} from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskPrintAlienObject extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            6,
            "Mentor", "OUTPUT", "CORRECT", "WRONG", "CORRECT",
            ["WRONG"]
        );
    }

    testTask(json: JSON) {


      if (Object.keys(json).length === 12) {

        //console.log(JSON.stringify(alien));

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




        return (checkFirstLetter(consoleStr) && stringEqualsString(consoleStr, "console") && stringEqualsString(dot1, ".") && stringEqualsString(log, "log")
            && stringEqualsString(openBracket1, "(") && stringEqualsString(jsonText, "JSON") && stringEqualsString(dot2, ".")
            && stringEqualsString(stringify, "stringify") && stringEqualsString(openBracket2, "(") && stringEqualsString(alien, "alien")
            && stringEqualsString(closeBracket1, ")") && stringEqualsString(closeBracket2, ")") && checkSemicolon(semicolon));



      } else {
        console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
        return false;
      }
    }

}
