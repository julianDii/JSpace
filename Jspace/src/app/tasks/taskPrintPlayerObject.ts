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

            "Check if you are using console.log and JSON.stringify correctly and if you are printing the object 'user'.",

            "This is the pilot object: " + "\n",

            "Ugh! A terrible error occurred." + "\n" + "\n" +
            "Check what the mentor is saying and try to print your player object again."
        );
    }

    private possibleWrongMentorMessages = ["no console.log at the beginning or not correctly spelled",
      "missing opening bracket after console.log",
      "JSON.stringify missing or not correctly spelled",
      "missing opening bracket after JSON.stringify",
      "probably not printing the object 'user'",
      "user written as string in '', not as object",
      "closing brackets or semicolon missing at the end",
      "There is something in your code which should not be there. It should contain max 12 elements."
    ];

    testTask(json: JSON) {
      console.log('tokenized string:', json);

      let codeCorrect = false;
      let expectedIdentifier = "user";

      if (Object.keys(json).length < 3) {
        let message = "Whoops! You have forgotten something. The elements you typed in are only " + Object.keys(json).length + "." +
          "\n" + "Check if you used console.log and JSON.stringify.";
        this.setMentorAnswerWrong(message);
        return false;
      }

      if (Object.keys(json).length >= 3 &&
        !(stringEqualsString(json[0].value, "console") &&
        stringEqualsString(json[1].value, ".") &&
        stringEqualsString(json[2].value, "log"))) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[0]);
        return false;
      }

      if (Object.keys(json).length >= 4 &&
        !stringEqualsString(json[3].value, "(")) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[1]);
        return false;
      }

      if (Object.keys(json).length >= 7 &&
        !(stringEqualsString(json[4].value, "JSON") &&
        stringEqualsString(json[5].value, ".") &&
        stringEqualsString(json[6].value, "stringify"))) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
        return false;
      }

      if (Object.keys(json).length >= 8 &&
        !stringEqualsString(json[7].value, "(")) {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[3]);
        return false;
      }

      if (Object.keys(json).length >= 9) {
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
}
