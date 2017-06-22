import { Task } from './task';
import {
  checkFirstLetter, checkFollowingLetters, checkForLeadingNumber, checkInputLength, removeQuotationMarks,
  validateIdentifier
} from '../test-code/helpers';
import { LocalStorageService } from '../storage/local.storage-service'

export class TaskName extends Task {

  private localStorageService = LocalStorageService.getInstance();

  constructor() {
    super(
      0,
      "Lucky devil! You are lost in a JavaScript world." + "\n" +
      "It seems like you need to reboot your terminal! Otherwise you won’t be able to send an emergency message! " +
      "For that you need to login." + "\n" +
      "Remember:" + "\n" +
      "Identifiers are used to name variables, and functions. Their first character must be a letter, underscore or " +
      "dollar sign. Following may be letters, digits underscores or dollar signs.",

      "Please type in your name below:",

      "Awesome! It worked.",
      "Oh no, you have probably used some forbidden signs.",

      "You are logged in.",
      "Sorry, this username does not seem to be a valid name. Please try to log in again!"
    );
  }

  private possibleWrongMentorMessages = ["Oh no, you have probably used some forbidden signs.",
  "It seems like your name is too long! It shouldn’t contain more than 20 literals.",
    "A leading number in your name is not allowed! Even R2D2 knows that.",];

  testTask(json: JSON) {
    console.log('tokenized string:', json);
    this.setMentorAnswerWrong(this.possibleWrongMentorMessages[0]);

    let input: string = json[0].value;
    let remove = removeQuotationMarks(input);
    let codeCorrect = false;

    if (checkForLeadingNumber(input)) {
      if (checkInputLength(input)) {
        if (checkFirstLetter(input)) {
          if (checkFollowingLetters(input)) {
            codeCorrect = true;
          } else {
            this.setMentorAnswerWrong(this.possibleWrongMentorMessages[0]);
          }
        } else {
          this.setMentorAnswerWrong(this.possibleWrongMentorMessages[0]);
        }
      } else {
        this.setMentorAnswerWrong(this.possibleWrongMentorMessages[1]);
      }
    } else {
      this.setMentorAnswerWrong(this.possibleWrongMentorMessages[2]);
    }

    if (codeCorrect) {
      let taskNumber = this.getTaskId() + 1;
      let player = { name: input, task: taskNumber };
      this.localStorageService.saveToLocalStorage('player', player);
    } else {
      let player = { name: "", task: this.getTaskId() };
      this.localStorageService.saveToLocalStorage('player', player);
    }

    return codeCorrect;
  }
}
