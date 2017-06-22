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

      "I am running on JavaScript." + "\n" + "To be able to wander around the planet safe and sound, we should slightly raise the oxygen level." + "\n" + "\n" +
      "At first it’s enough to declare a simple variable called oxygen. You also need to give it a value. " + "\n" +
      "Something between 1 and 100 seems to be a good decision to accomplish your next tasks.",

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

  private possibleWrongMentorMessages = ["Something is missing in your input. Do you remember what we learned to put at the end of every command?", // 0
    "The oxygen tank can’t be filled with more than 100. And since we want to survive outside, you shouldn’t go out with 0 oxygen!", // 1
    "I know, we may be in a JavaScript world, but raising our oxygen level with letters or signs different than numbers sounds quite awkward, right?", // 2
    "How do we assign a value to a statement? Check what you forgot!", // 3
    "I think you spelled oxygen wrong or it is not even there. Otherwise I can’t tell why the compiler tells us that the identifier is incorrect.", // 4
    "The system tells me that you forgot a “vary” important word at the very beginning of the command!", // 5
    "There is something in your code which should not be there. It should contain exactly 5 elements.", // 6
    "Ouch! Something went wrong. " + "\n" + // 7
    "Please check if you spelled everything in the right way, first. " +
    "Your statement should contain 5 parts: " + "\n" +
    "The keyword to declare a variable, the identifier of the variable, " +
    "the assignment operator, the value of the variable as a number and the semicolon."
  ];

  testTask(json: JSON) {
    this.setMentorAnswerWrong(this.possibleWrongMentorMessages[7]);

    let codeCorrect = false;
    let expectedIdentifier = 'oxygen';
    let expectedMin = 0;
    let expectedMax = 100;

    if (Object.keys(json).length > 5) {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[6]);
      return false;
    }

    if (Object.keys(json).length >= 1 && checkKeyword(json[0].value)) {
      if (Object.keys(json).length >= 2 && checkIdentifier(json[1].value, expectedIdentifier)) {
          if (Object.keys(json).length >= 3 && checkEqualSign(json[2].value)) {
            if (Object.keys(json).length >= 4 && validateNumber(json[3].value)) {
              if (Object.keys(json).length >= 4 && checkInterval(json[3].value, expectedMin, expectedMax)) {
                if (Object.keys(json).length >= 5 && checkSemicolon(json[4].value)) {
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
      } else {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[4]);
      }
    } else {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[5]);
    }

    if (codeCorrect) {
      let player = JSON.parse(this.localStorageService.readLocalStorage('player'));
      player[expectedIdentifier] = json[3].value;
      player['task'] = this.getTaskId() + 1;
      this.localStorageService.saveToLocalStorage('player', player);
    }

    return codeCorrect;
  }
}
