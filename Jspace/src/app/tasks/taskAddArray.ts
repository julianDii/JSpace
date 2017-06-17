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
      "An array-element might be a good choice." + "\n" +
      "We should name our array 'backpack'. And don't forget that the user (simply you) is an object!",

      "It seems like you lost your backpack. Well then let us make you a new one.",

      "Done! We can now store all the items we need in our backpack.",

      "Try again! Something went wrong with your code." + "\n" +
      "The array must be empty! A little more help?" + "\n" +
      "The input should look like this: " + "\n" + "object.element = []; (you need to replace object and element for sure)",

      "Nice! Now we have an empty backpack to store our stuff in.",

      "Error! Try it again and check if you really used the right keywords." + "\n" + "Maybe the mentor knows more?"
    );
  }

  private possibleWrongMentorMessages = ["user.backpack misspelled or other identifiers used",
    "= probably missing",
    "there should be empty squared brackets",
    "semicolon probably missing",
    "There is something in your code which should not be there. It should contain exactly 7 elements."
  ];

  testTask(json: JSON) {
    console.log('tokenized string:', json);

    let expectedIdentifier1 = "user";
    let expectedIdentifier2 = "backpack";
    let codeCorrect: boolean = false;

    if (Object.keys(json).length < 3) {
      let message = "Whoops! You have forgotten something. The elements you typed in are only " + Object.keys(json).length + "." +
        "\n" + "Check if you used the right operator and assigned the result to oxygen.";
      this.setMentorAnswerWrong(message);
      return false;
    }

    if (Object.keys(json).length >= 3 &&
      !(stringEqualsString(json[0].value, "user") &&
      stringEqualsString(json[1].value, ".") &&
      stringEqualsString(json[2].value, "backpack"))) {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[0]);
      return false;
    }

    if (Object.keys(json).length >= 4 &&
      !(stringEqualsString(json[3].value, "="))) {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[1]);
      return false;
    }

    if (Object.keys(json).length >= 6 &&
      !(stringEqualsString(json[4].value, "[") &&
      stringEqualsString(json[5].value, "]"))) {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
      return false;
    }

    if (Object.keys(json).length >= 7 &&
      !(checkSemicolon(json[6].value))) {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[3]);
      return false;
    }

    if (Object.keys(json).length > 7) {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[7]);
    } else if (Object.keys(json).length === 7){
      codeCorrect = true;
    }

    if (codeCorrect) {
      let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
      player.task = this.getTaskId() + 1;
      player['backpack'] = [];
      this.localStorageService.saveToLocalStorage('player', player);
      delete player.task;
      let newMessage = this.getMessageCorrect() + "\n" + JSON.stringify(player.backpack);
      this.setMessageCorrect(newMessage);
    }

    return codeCorrect;
  }
}
