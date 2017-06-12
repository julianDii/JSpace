import { Task } from './task';
import { checkSemicolon, stringEqualsString } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskElementToArray extends Task {

  private localStorageService = LocalStorageService.getInstance();

  constructor() {
    super(
      5,
      "The push() method adds new items to the end of an array, and returns the new length." + "\n" +
      "Note: The new item(s) will be added at the end of the array. " + "\n" +
      " Note: This method changes the length of the array." + "\n" +
      "An example could be: object.element.push(elementYouWant);",

      "Cool! We met some nice aliens who are willing to trade with us." + "\n" +
      "Let's accept the offered 'aluminium-shard'." + "\n" + "To do that, we will need to push it to our backpack-array." + "\n" +
      "So go on, address the array first and push the 'aluminium-shard'-element to it.",

      "Well done! You now added an element to your array. Let’s move on.",

      "Something went wrong while adding the element." + "\n" + "Take this example: user.backpack.push(“Monster-Juice”);" + "\n" +
      "Now try again!",

      "Nice! Here, your backpack with the added element.",
      ["Doh! Are you sure that you used the correct keyword? Remember that we need an aluminium-shard element!"]
    );
  }


  testTask(json: JSON) {

    if (Object.keys(json).length === 14) {
      let checkAlternative = json[6].value;

      //user.backpack.push(alien.backpack[0]);
      if (checkAlternative === "alien") {
        let userString = json[0].value;
        let firstDot = json[1].value;
        let backpackString = json[2].value;
        let secondDot = json[3].value;
        let pushString = json[4].value;
        let openBracket = json[5].value;
        let alienString = json[6].value;
        let thirdDot = json[7].value;
        let backpackString2 = json[8].value;
        let bracket1 = json[9].value;
        let zeroNum = json[10].value;
        let bracket2 = json[11].value;
        let closeBracket = json[12].value;
        let semicolon = json[13].value;

        if ((stringEqualsString(userString, "user") && stringEqualsString(firstDot, ".") && stringEqualsString(backpackString, "backpack")
          && stringEqualsString(secondDot, ".") && stringEqualsString(pushString, "push") && stringEqualsString(openBracket, "(")
          && stringEqualsString(alienString, "alien") && stringEqualsString(thirdDot, ".") && stringEqualsString(backpackString2, "backpack")
          && stringEqualsString(bracket1, "[") && stringEqualsString(zeroNum, "0") && stringEqualsString(bracket2, "]") && stringEqualsString(closeBracket, ")")
          && stringEqualsString(semicolon, ";"))) {
          let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
          player.task = this.getTaskId() + 1;
          player.backpack.push('aluminium-shard');
          this.localStorageService.saveToLocalStorage('player', player);
          let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
          this.setMessageCorrect(newMessage);
        }
        return (stringEqualsString(userString, "user") && stringEqualsString(firstDot, ".") && stringEqualsString(backpackString, "backpack")
          && stringEqualsString(secondDot, ".") && stringEqualsString(pushString, "push") && stringEqualsString(openBracket, "(")
          && stringEqualsString(alienString, "alien") && stringEqualsString(thirdDot, ".") && stringEqualsString(backpackString2, "backpack")
          && stringEqualsString(bracket1, "[") && stringEqualsString(zeroNum, "0") && stringEqualsString(bracket2, "]") && stringEqualsString(closeBracket, ")")
          && stringEqualsString(semicolon, ";"));
      }

      //user.backpack[1] = alien.backpack[0];
      if (checkAlternative === "=") {
        let userString = json[0].value;
        let firstDot = json[1].value;
        let backpackString = json[2].value;
        let bracket1 = json[3].value;
        let num = json[4].value;
        let bracket2 = json[5].value;
        let equalSign = json[6].value;
        let alienString = json[7].value;
        let secondDot = json[8].value;
        let backpackString2 = json[9].value;
        let bracket3 = json[10].value;
        let numZero = json[11].value;
        let bracket4 = json[12].value;
        let semicolon = json[13].value;

        if ((stringEqualsString(userString, "user") && stringEqualsString(firstDot, ".") && stringEqualsString(backpackString, "backpack")
          && stringEqualsString(bracket1, "[") && stringEqualsString(num, "1") && stringEqualsString(bracket2, "]")
          && stringEqualsString(equalSign, "=") && stringEqualsString(alienString, "alien") && stringEqualsString(secondDot, ".")
          && stringEqualsString(backpackString2, "backpack") && stringEqualsString(bracket3, "[") && stringEqualsString(numZero, "0") && stringEqualsString(bracket4, "]")
          && stringEqualsString(semicolon, ";"))) {
          let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
          player.task = this.getTaskId() + 1;
          player.backpack.push('aluminium-shard');
          this.localStorageService.saveToLocalStorage('player', player);
          let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
          this.setMessageCorrect(newMessage);
        }
        return (stringEqualsString(userString, "user") && stringEqualsString(firstDot, ".") && stringEqualsString(backpackString, "backpack")
          && stringEqualsString(bracket1, "[") && stringEqualsString(num, "1") && stringEqualsString(bracket2, "]")
          && stringEqualsString(equalSign, "=") && stringEqualsString(alienString, "alien") && stringEqualsString(secondDot, ".")
          && stringEqualsString(backpackString2, "backpack") && stringEqualsString(bracket3, "[") && stringEqualsString(numZero, "0") && stringEqualsString(bracket4, "]")
          && stringEqualsString(semicolon, ";"));
      }
    }

    if (Object.keys(json).length === 9) {
      let checkVersion = json[3].value;
      // user.backpack.push("aluminium-shard");
      if (checkVersion === ".") {
        let userString = json[0].value;
        let firstDot = json[1].value;
        let backpackString = json[2].value;
        let secondDot = json[3].value;
        let pushString = json[4].value;
        let openBracket = json[5].value;
        let aluminiumShardString = json[6].value;
        let closeBracket = json[7].value;
        let semicolon = json[8].value;

        if ((stringEqualsString(userString, "user") && stringEqualsString(firstDot, ".") && stringEqualsString(backpackString, "backpack")
          && stringEqualsString(secondDot, ".") && stringEqualsString(pushString, "push") && stringEqualsString(openBracket, "(")
          && (stringEqualsString(aluminiumShardString, "\"aluminium-shard\"") || stringEqualsString(aluminiumShardString, "'aluminium-shard'")) && stringEqualsString(closeBracket, ")") && checkSemicolon(semicolon))) {
          let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
          player.task = this.getTaskId() + 1;
          player.backpack.push('aluminium-shard');
          this.localStorageService.saveToLocalStorage('player', player);
          let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
          this.setMessageCorrect(newMessage);
        }
        return (stringEqualsString(userString, "user") && stringEqualsString(firstDot, ".") && stringEqualsString(backpackString, "backpack")
          && stringEqualsString(secondDot, ".") && stringEqualsString(pushString, "push") && stringEqualsString(openBracket, "(")
          && (stringEqualsString(aluminiumShardString, "\"aluminium-shard\"") || stringEqualsString(aluminiumShardString, "'aluminium-shard'")) && stringEqualsString(closeBracket, ")") && checkSemicolon(semicolon));
      }

      // user.backpack[0] = 'aluminium-shard';
      if (checkVersion === "[") {
        let userStr = json[0].value;
        let dot1 = json[1].value;
        let backpackStr = json[2].value;
        let bracket1 = json[3].value;
        let zeroNum = json[4].value;
        let bracket2 = json[5].value;
        let equalSign = json[6].value;
        let aluminiumShardStr = json[7].value;
        let semicolon2 = json[8].value;

        if (stringEqualsString(userStr, "user") && stringEqualsString(dot1, ".") && stringEqualsString(backpackStr, "backpack")
          && stringEqualsString(bracket1, "[") && stringEqualsString(zeroNum, "0") && stringEqualsString(bracket2, "]")
          && stringEqualsString(equalSign, "=") && (stringEqualsString(aluminiumShardStr, "'aluminium-shard'") || stringEqualsString(aluminiumShardStr, "\"aluminium-shard\""))
          && checkSemicolon(semicolon2)) {

          let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
          player.task = this.getTaskId() + 1;
          player.backpack.push('aluminium-shard');
          this.localStorageService.saveToLocalStorage('player', player);
          let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
          this.setMessageCorrect(newMessage);
        }
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
