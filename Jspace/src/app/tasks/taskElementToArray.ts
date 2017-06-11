import { Task } from './task';
import {checkFirstLetter, checkSemicolon, stringEqualsString} from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskElementToArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

  constructor() {
    super(
      5,
      "Mentor", "OUTPUT", "CORRECT", "WRONG", "CORRECT",
      ["WRONG"]
    );
  }

  testTask(json: JSON) {

    let checkVersion = json[3].value;

    if (Object.keys(json).length === 9) {

      if(checkVersion === ".") {

        let userString = json[0].value;
        let firstDot = json[1].value;
        let backpackString = json[2].value;
        let secondDot = json[3].value;
        let pushString = json[4].value;
        let openBracket = json[5].value;
        let aluminiumShardString = json[6].value;
        let closeBracket = json[7].value;
        let semicolon = json[8].value;

        return (checkFirstLetter(userString) && stringEqualsString(userString, "user") && stringEqualsString(firstDot, ".") && stringEqualsString(backpackString, "backpack")
        && stringEqualsString(secondDot, ".") && stringEqualsString(pushString, "push") && stringEqualsString(openBracket, "(")
        && (stringEqualsString(aluminiumShardString, "\"aluminium-shard\"") || stringEqualsString(aluminiumShardString, "'aluminium-shard'")) && stringEqualsString(closeBracket, ")") && checkSemicolon(semicolon));
      }

      if(checkVersion === "[") {

        let userStr = json[0].value;
        let dot1 = json[1].value;
        let backpackStr = json[2].value;
        let bracket1 = json[3].value;
        let zeroNum = json[4].value;
        let bracket2 = json[5].value;
        let equalSign = json[6].value;
        let aluminiumShardStr = json[7].value;
        let semicolon2 = json[8].value;

        return (stringEqualsString(userStr, "user") && stringEqualsString(dot1, ".") && stringEqualsString(backpackStr, "backpack")
        && stringEqualsString(bracket1, "[") && stringEqualsString(zeroNum, "0") && stringEqualsString(bracket2, "]")
        && stringEqualsString(equalSign, "=") && (stringEqualsString(aluminiumShardStr, "'aluminium-shard'") || stringEqualsString(aluminiumShardStr, "\"aluminium-shard\""))
        && checkSemicolon(semicolon2));

      }

    } else {
      console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
      return false;
    }
  }
}
