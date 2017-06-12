import { Task } from './task';
import { checkSemicolon, stringEqualsString } from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskLoopArray extends Task {

    private localStorageService = LocalStorageService.getInstance();

    constructor() {
        super(
            8,
            "Despite having a lot of options for different loops, I will show you the for-loop. " + "\n" +
            "It works as follows: " + "\n" +
            "for (statement1; statement2; statement3) { code block to be executed } " + "\n" +
            "Statement 1 is executed before the loop (the code block) starts." + "\n" +
            "Statement 2 defines the condition for running the loop (the code block)." + "\n" +
            "Statement 3 is executed each time after the loop (the code block) has been executed." + "\n" +
            "For instance:  " + "\n" + "for (var i = 0; i < object.element.length; i ++) { object.element.push(object.element[i]);}" + "\n" + 
            "Be aware that the array of the board computer is named 'inventory'.",

            "Time to transfer our items to the board computer." + "\n" +
            "So that it can calculate the amount of resources and time that we need to repair" + "\n" + "the ship." + "\n" +
            "Push the items from our backpack to the inventory of the board computer with a" + "\n" +
            "for-loop.",

            "Transaction complete! All Materials collected. Good job!",

            "Transaction incomplete! Make sure to address the user's backpack for the iteration!",

            "Yippieh! Time to repair the ship and leave the planet!",

            ["Bzzzt! Error! What do you suggest, dear mentor?"]
        );
    }

   testTask(json: JSON) {
        if (Object.keys(json).length === 34) {
            let forString = json[0].value;
            let openingBracket1 = json[1].value;
            let varString = json[2].value;
            let firstI = json[3].value;
            let equalSign = json[4].value;
            let valueOfI = json[5].value;
            let semicolon1 = json[6].value;
            let secondI = json[7].value;
            let smallerThanSign = json[8].value;
            let user1 = json[9].value;
            let dot1 = json[10].value;
            let backpackUser1 = json[11].value;
            let dot2 = json[12].value;
            let lengthString = json[13].value;
            let semicolon2 = json[14].value;
            let thirdI = json[15].value;
            let plusPlus = json[16].value;
            let closingBracket1 = json[17].value;
            let openingBracket2 = json[18].value;
            let boardComputerString = json[19].value;
            let dot3 = json[20].value;
            let inventoryBoardComputer = json[21].value;
            let dot4 = json[22].value;
            let push = json[23].value;
            let openingBracket3 = json[24].value;
            let user2 = json[25].value;
            let dot5 = json[26].value;
            let backpackUser2 = json[27].value;
            let openingBracket4 = json[28].value;
            let index = json[29].value;
            let closingBracket2 = json[30].value;
            let closingBracket3 = json[31].value;
            let semicolon3 = json[32].value;
            let closingBracket4 = json[33].value;

            if((stringEqualsString(forString, "for")&&
                stringEqualsString(openingBracket1, "(") &&
                stringEqualsString(varString, "var") &&
                stringEqualsString(firstI, "i") && 
                stringEqualsString(equalSign, "=") &&
                stringEqualsString(valueOfI, "0") &&
                checkSemicolon(semicolon1) &&
                stringEqualsString(secondI, "i") &&
                stringEqualsString(smallerThanSign, "<") &&
                stringEqualsString(user1, "user") &&
                stringEqualsString(dot1, ".") &&
                stringEqualsString(backpackUser1, "backpack") &&
                stringEqualsString(dot2, ".") &&
                stringEqualsString(lengthString, "length") &&
                checkSemicolon(semicolon2) &&
                stringEqualsString(thirdI, "i") &&
                stringEqualsString(plusPlus, "++") &&
                stringEqualsString(closingBracket1, ")") &&
                stringEqualsString(openingBracket2, "{") &&
                stringEqualsString(boardComputerString, "boardcomputer") &&
                stringEqualsString(dot3, ".") &&
                stringEqualsString(inventoryBoardComputer, "inventory") &&
                stringEqualsString(dot4, ".") &&
                stringEqualsString(push, "push") &&
                stringEqualsString(openingBracket3, "(") &&
                stringEqualsString(user2, "user") &&
                stringEqualsString(dot5, ".") &&
                stringEqualsString(backpackUser2, "backpack") &&
                stringEqualsString(openingBracket4, "[") &&
                stringEqualsString(index, "i") &&
                stringEqualsString(closingBracket2, "]") &&
                stringEqualsString(closingBracket3, ")") &&
                checkSemicolon(semicolon3) &&
                stringEqualsString(closingBracket4, "}"))) {
                    
                    let boardcomputer = { inventory: [] }
                    let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
                    player.task = this.getTaskId() + 1;

                    for (var i = 0; i < player.backpack.length; i++) {
                        boardcomputer.inventory.push(player.backpack[i]);
                    }
                    player.backpack = [];
                    this.localStorageService.saveToLocalStorage('player', player);
                    this.localStorageService.saveToLocalStorage('boardcomputer', boardcomputer);

                    let newMessage = this.getMessageCorrect()
                    + "\n" + "BOARDCOMPUTER: " + JSON.stringify(boardcomputer.inventory);
                   
                    this.setMessageCorrect(newMessage);
                    this.localStorageService.resetLocalStorageItem('player');
                }

            return (stringEqualsString(forString, "for")
                && stringEqualsString(openingBracket1, "(")
                && stringEqualsString(varString, "var")
                && stringEqualsString(firstI, "i")
                && stringEqualsString(equalSign, "=")
                && stringEqualsString(valueOfI, "0")
                && checkSemicolon(semicolon1)
                && stringEqualsString(secondI, "i")
                && stringEqualsString(smallerThanSign, "<")
                && stringEqualsString(user1, "user")
                && stringEqualsString(dot1, ".")
                && stringEqualsString(backpackUser1, "backpack")
                && stringEqualsString(dot2, ".")
                && stringEqualsString(lengthString, "length")
                && checkSemicolon(semicolon2)
                && stringEqualsString(thirdI, "i")
                && stringEqualsString(plusPlus, "++")
                && stringEqualsString(closingBracket1, ")")
                && stringEqualsString(openingBracket2, "{")
                && stringEqualsString(boardComputerString, "boardcomputer")
                && stringEqualsString(dot3, ".")
                && stringEqualsString(inventoryBoardComputer, "inventory")
                && stringEqualsString(dot4, ".")
                && stringEqualsString(push, "push")
                && stringEqualsString(openingBracket3, "(")
                && stringEqualsString(user2, "user")
                && stringEqualsString(dot5, ".")
                && stringEqualsString(backpackUser2, "backpack")
                && stringEqualsString(openingBracket4, "[")
                && stringEqualsString(index, "i")
                && stringEqualsString(closingBracket2, "]")
                && stringEqualsString(closingBracket3, ")")
                && checkSemicolon(semicolon3)
                && stringEqualsString(closingBracket4, "}"));
        } else {
            console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
            return false;
        }
    }
}
