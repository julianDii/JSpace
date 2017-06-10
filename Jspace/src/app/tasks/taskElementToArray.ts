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
            "An example could be: user.backpack.push(“Monster-Juice”);",

            "Cool! We met some nice aliens who are willing to trade with us." + "\n" +
            "Before we accept the great offer, we will first need to push a new " + "\n" +
            "“Aluminium-shard”- element to the array." + "\n" +
            "For this, we got to address the array first and push a new element " + "\n" + "to it.",

            "Well done! You now added an element to your array. Let’s move on.",
            "Something went wrong when adding the element. Try again!",
            "Nice! Here your backpack with the added element.",
            ["Doh! Are you sure that you used the correct keyword? Remember that " + "\n" +
                "we need an aluminium-shard element!"]
        );
    }

    testTask(json: JSON) {
        if (Object.keys(json).length === 9) {
            let checkVersion = json[3].value;

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
