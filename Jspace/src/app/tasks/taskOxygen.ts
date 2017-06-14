import { Task } from './task';
import { LocalStorageService } from '../storage/local.storage-service'
import {
  checkIdentifier, checkInterval, checkKeyword, validateIdentifier, validateNumber, checkEqualSign,
  checkSemicolon
} from '../test-code/helpers';

export class TaskOxygen extends Task {

  private localStorageService = LocalStorageService.getInstance();

  constructor() {
    super(
      1,
      "Let’s get started with the basics." + "\n" +
      "Syntax:" + "\n" +
      "A Program is a list of instructions to be executed by a machine. These instructions are called statements. " +
      "In JS, statements end with semicolons. Big Error-source, so don't forget them." + "\n" +
      "JS ignores multiple spaces, so the following is equal:" + "\n" +
      "a = 10;" + "\n" +
      "a = " + "&nbsp;&nbsp;&nbsp;" + "10;" + "\n" +
      "Since statements are separated by Semicolons you can also write them in one line, but you shouldn’t." + "\n" +
      "a = 5; b = 2; c = a + b;" + "\n" +
      "-----------------------------------------------------" + "\n" +
      "Variables:" + "\n" +
      "Variables are containers for storing data values. You declare a JavaScript variable with the var keyword:" + "\n" +
      "var x;" + "\n" +
      "After the declaration, the variable has no value (Technically it has the value of undefined)." + "\n" +
      "To assign a value to the variable, use the equal sign:" + "\n" +
      "x = 33;" + "\n" +
      "You can also assign a value to the variable when you declare it:" + "\n" +
      "var x = 33;" + "\n" +
      "Now it’s your turn." + "\n" + "Check what the board computer is saying!",

      "I am running on JavaScript." + "\n" + "To be able to wander around the planet safe and sound, we should slightly raise the oxygen level." + "\n" +
      "At first it’s enough to declare a simple variable called oxygen. You also need to give it a value. " + "\n" +
      "10 seems to " +
      "be a good decision to accomplish your next tasks.",

      "Yeah! You rock! You increased your oxygen level. It can’t get any worse now.",
      "Ouch! Something went wrong. " + "\n" +
      "Please check if you spelled everything in the right way, first. " +
      "Your statement should contain 5 parts: " + "\n" +
      "The keyword to declare a variable, the identifier of the variable, " +
      "the assignment operator, the value of the variable as a number and the semicolon.",

      "You have set your oxygen level.",
      "Try to set your oxygen level again."
    );
  }

  private possibleWrongMentorMessages = ["syntax -> semicolon", "outside interval", "value is not number", "syntax -> equal sign",
  "identifier not oxygen", "at beginning is not var"];

  testTask(json: JSON) {
    let codeCorrect = false;

    if (Object.keys(json).length === 5) {
      let expectedIdentifier = 'oxygen';
      let expectedMin = 0;
      let expectedMax = 100;
      let keyword = json[0].value;
      let identifier = json[1].value;
      let equalSign = json[2].value;
      let number = json[3].value;
      let semicolon = json[4].value;

      if (checkKeyword(keyword)) {
        if (checkIdentifier(identifier, expectedIdentifier)) {
          //if (validateIdentifier(identifier)) {
            if (checkEqualSign(equalSign)) {
              if (validateNumber(number)) {
                if (checkInterval(number, expectedMin, expectedMax)) {
                  if (checkSemicolon(semicolon)) {
                    codeCorrect = true;
                  } else {
                    this.setMentorAnswerWrong(this.possibleWrongMentorMessages[0]);
                  }
                } else {
                  this.setMentorAnswerWrong(this.possibleWrongMentorMessages[1]);
                }
              } else {
                this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
              }
            } else {
              this.setMentorAnswerWrong(this.possibleWrongMentorMessages[3]);
            }
          //}
        } else {
          this.setMentorAnswerWrong(this.possibleWrongMentorMessages[4]);
        }
      } else {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[5]);
      }

      if (codeCorrect) {
        let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
        player[identifier] = number;
        player['task'] = this.getTaskId() + 1;
        this.localStorageService.saveToLocalStorage('player', player);
      }
    } else {
      console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length);
    }
    return codeCorrect;
  }
}
