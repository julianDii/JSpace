import { Task } from './task';
import { LocalStorageService } from '../storage/local.storage-service'

import {
  checkEqualSign, checkIdentifier, checkInputLength, checkNumber, checkOperator, checkSemicolon,
  validateIdentifier, validateNumber
} from '../test-code/helpers';

export class TaskOxygenDouble extends Task {

  private localStorageService = LocalStorageService.getInstance();

  constructor() {
    super(
      2,
      "You can also calculate with JavaScript." + "\n" +
      "JavaScript supports nearly all of the known operators like +, -, %(Modulo) or * and /." + "\n" +
      "Note that the calculated value has to be stored and that you don’t need the var-keyword again. " + "\n" +
      "For example: x = x + 2;",

      "Double up your oxygen level.",

      "Great! We are good to go now!",
      "Whoops! Check if you used the right operator and assigned the result to oxygen. Syntax checking in input terminal might also be of help.",

      "You have doubled your oxygen level.",
      "An error happened. Try to double up your oxygen level again."
    );
  }

  private possibleWrongMentorMessages = ["Well, this time we do not need var at the beginning.", // 0
    "You might have misspelled the identifier or it is missing!", // 1
    "Again, with which sign do we tell our compiler that the command ends?", // 2
    "You gotta double your oxygen level. Everything else than the doubled value is going end up in an error!", // 3
    "To raise the level of your oxygen you’re only allowed to use two operators to do so. That’s either + for addition or * for multiplication.", // 4
    "There is something in your code which should not be there. It should contain max 6 elements.", // 5
    "Whoops! Check if you used the right operator and assigned the result to oxygen. Syntax checking in input terminal might also be of help." // 6
  ];

  testTask(json: JSON) {
    console.log('tokenized string:', json);
    this.setMentorAnswerWrong(this.possibleWrongMentorMessages[6]);

    let expectedIdentifier = "oxygen";
    let expectedMultiplicator = "2";
    let codeCorrect: boolean = false;

    if (Object.keys(json).length < 4) {
      let message = "Whoops! You have forgotten something. The elements you typed in are only " + Object.keys(json).length + "." +
        "\n" + "Check if you used the right operator and assigned the result to oxygen.";
      this.setMentorAnswerWrong(message);
      return false;
    }

    if (Object.keys(json).length > 6) {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[5]);
      return false;
    }

    if (json[0].value === "var") {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[0]);
      return false;
    }

    if (json[0].value !== expectedIdentifier) {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[1]);
      return false;
    }

      if (json[1].value === '*=' && Object.keys(json).length === 4) {
        if (json[2].value === expectedMultiplicator) {
          if (json[3].value === ";") {
            codeCorrect = true;
          } else {
            this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
          }
        } else {
          this.setMentorAnswerWrong(this.possibleWrongMentorMessages[3]);
        }
      }
      else if (json[1].value === '=' && Object.keys(json).length === 6) {
        if (json[2].value === expectedIdentifier) {
          if (json[3].value === "*") {
            if (json[4].value === expectedMultiplicator) {
              if (json[5].value === ";") {
                codeCorrect = true;
              } else {
                this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
              }
            } else {
              this.setMentorAnswerWrong(this.possibleWrongMentorMessages[3]);
            }
          } else if (json[3].value === "+") {
            if (json[4].value === expectedIdentifier) {
              if (json[5].value === ";") {
                codeCorrect = true;
              } else {
                this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
              }
            }
          } else {
            this.setMentorAnswerWrong(this.possibleWrongMentorMessages[4]);
          }
        } else if (json[2].value === expectedMultiplicator) {
          if (json[3].value === "*") {
            if (json[4].value === expectedIdentifier) {
              if (json[5].value === ";") {
                codeCorrect = true;
              } else {
                this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
              }
            } else {
              this.setMentorAnswerWrong(this.possibleWrongMentorMessages[1]);
            }
          } else {
            this.setMentorAnswerWrong(this.possibleWrongMentorMessages[4]);
          }
        } else {
          this.setMentorAnswerWrong(this.possibleWrongMentorMessages[3]);
        }
      }

      if (codeCorrect) {
        let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
        let level = player['oxygen'];
        level = level * parseInt(expectedMultiplicator);
        player[expectedIdentifier] = level;
        let task = this.getTaskId() + 1;
        player['task'] = task;
        this.localStorageService.saveToLocalStorage('player', player);
        console.log('code correct');
      } else {
        console.log('ERROR code not correct');
      }

      return codeCorrect;
  }
}
