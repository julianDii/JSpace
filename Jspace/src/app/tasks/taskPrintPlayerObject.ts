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
            "The easiest way to print an object is:" + "\n" +
            "console.log(JSON.stringify(Object));" + "\n" +
            "Your object, is stored within the variable user.",

            "I just made a system check and it seems like we need more aluminium to repair our spaceship." + "\n" +
            "\n" + "Please check if you still have your backpack - maybe it contains the required material.",

            "Fabulous! It worked. Move on to the next task.",

            "Check if you are using console.log and JSON.stringify correctly and if you are printing the object user.",

            "This is the pilot object: " + "\n",

            "Ugh! A terrible error occurred." + "\n" + "\n" +
            "Check what the mentor is saying and try to print your player object again."
        );
    }

    private possibleWrongMentorMessages = ["no console.log at the beginning or not correctly spelled", // 0
      "missing opening bracket after console.log", // 1
      "JSON.stringify missing or not correctly spelled", // 2
      "missing opening bracket after JSON.stringify", // 3
      "probably not printing the object user", // 4
      "user written as string in '', not as object", // 5
      "closing brackets or semicolon missing at the end", // 6
      "There is something in your code which should not be there. It should contain exactly 12 elements.", // 7
      "Check if you are using console.log and JSON.stringify correctly and if you are printing the object user."// 8
    ];

    testTask(json: JSON) {
      console.log('tokenized string:', json);
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[6]);

      let codeCorrect = false;
      let expectedIdentifier = "user";

      if (Object.keys(json).length < 3) {
        let message = "Whoops! You have forgotten something. The elements you typed in are only " + Object.keys(json).length + "." +
          "\n" + "You should use console.log and JSON.stringify.";
        this.setMentorAnswerWrong(message);
        return false;
      }

      if (!this.checkConsoleLog(json)) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[0]);
        return false;
      }

      if (Object.keys(json).length === 3 &&
        this.checkConsoleLog(json) ||
        Object.keys(json).length >= 4 &&
        !stringEqualsString(json[3].value, "(")) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[1]);
        return false;
      }

      if (Object.keys(json).length === 4 &&
        stringEqualsString(json[3].value, "(") ||
        !this.checkJSONstringify(json)) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
        return false;
      }

      if (Object.keys(json).length === 7 &&
        this.checkJSONstringify(json) ||
        Object.keys(json).length >= 8 &&
        !stringEqualsString(json[7].value, "(")) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[3]);
        return false;
      }

      if (Object.keys(json).length === 8 &&
        stringEqualsString(json[7].value, "(") ||
        Object.keys(json).length >= 9) {
        if (stringEqualsString(json[8].value, "'user'")) {
          this.setMentorAnswerWrong(this.possibleWrongMentorMessages[5]);
          return false;
        }
        if (!stringEqualsString(json[8].value, "user")) {
          this.setMentorAnswerWrong(this.possibleWrongMentorMessages[4]);
          return false;
        }
      }

      if (Object.keys(json).length < 12) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[6]);
        return false;
      } else if (Object.keys(json).length > 12) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[7]);
      } else {
        if (stringEqualsString(json[9].value, ")") && stringEqualsString(json[10].value, ")") &&
          checkSemicolon(json[11].value)) {
          codeCorrect = true;
        }
      }

      if (codeCorrect) {
        let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
        player.task = this.getTaskId() + 1;
        this.localStorageService.saveToLocalStorage('player', player);
        delete player.task;
        let newMessage = this.getMessageCorrect() + JSON.stringify(player);
        this.setMessageCorrect(newMessage);
      }

      return codeCorrect;
    }

    private checkConsoleLog(json) {
      return Object.keys(json).length >= 3 &&
        stringEqualsString(json[0].value, "console") &&
        stringEqualsString(json[1].value, ".") &&
        stringEqualsString(json[2].value, "log");
    }

    private checkJSONstringify(json) {
      return Object.keys(json).length >= 7 &&
      stringEqualsString(json[4].value, "JSON") &&
      stringEqualsString(json[5].value, ".") &&
      stringEqualsString(json[6].value, "stringify");
    }
}
