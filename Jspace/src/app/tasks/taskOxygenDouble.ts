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
      "Note that the calculated value has to be stored and that you don’t need the var-keyword. " + "\n" +
      "For example: x = x + 2;",

      "Double up your oxygen level.",

      "Great! We are good to go now!",
      "Whoops! Check if you used the right operator and assigned the result to oxygen.",

      "You have doubled your oxygen level.",
      ["An error happened. Try to double up your oxygen level again."]
    );
  }

  testTask(json: JSON) {
    console.log('tokenized string:', json);

    let expectedIdentifier = "oxygen";
    let expectedMultiplicator = "2";
    let codeCorrect : boolean = false;

    if (Object.keys(json).length >= 4) {
      if (json[0].value !== "var") {
        if (json[0].value === expectedIdentifier) {
          if (json[1].value === '*=' && Object.keys(json).length === 4) {
            if (json[2].value === expectedMultiplicator) {
              if (json[3].value === ";") {
                codeCorrect = true;
              } else {
                console.log('ERROR check the syntax');
              }
            } else {
              console.log('ERROR the result oxygen level is not as expected');
            }
          }
          else if (json[1].value === '=' && Object.keys(json).length === 6) {
            if (json[2].value === expectedIdentifier) {
              if (json[3].value === "*") {
                if (json[4].value === expectedMultiplicator) {
                  if (json[5].value === ";") {
                    codeCorrect = true;
                  } else {
                    console.log('ERROR check the syntax');
                  }
                } else {
                  console.log('ERROR the result oxygen level is not as expected');
                }
              } else {
                console.log('ERROR are you multiplicating?');
              }
            } else if (json[2].value === expectedMultiplicator) {
              if (json[3].value === "*") {
                if (json[4].value === expectedIdentifier) {
                  if (json[5].value === ";") {
                    codeCorrect = true;
                  } else {
                    console.log('ERROR check the syntax');
                  }
                } else {
                  console.log('ERROR are you really using your oxygen?');
                }
              } else {
                console.log('ERROR are you multiplicating?');
              }
            } else {
              console.log('ERROR the result oxygen level is not as expected');
            }
          }
        } else {
          console.log('ERROR are you really using your oxygen?');
        }
      } else {
        console.log('ERROR you should not use the keyword var at beginning');
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
    } else {
      console.log('ERROR U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
      return false;
    }
  }
}
