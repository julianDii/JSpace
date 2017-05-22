import { Task } from './task';
import {
  checkEqualSign, checkIdentifier, checkNumber, checkOperator, checkSemicolon,
  validateIdentifier, validateNumber
} from '../test-code/helpers';

export class TaskOxygenDouble extends Task {

  constructor() {
    super(
      2,
      'You can also calculate with JavaScript, try to double up your oxygen. To view the existing operators in ' +
      'JavaScript enter operators(). Note that the calculated value has to be stored and that you don’t need the ' +
      'var-keyword. For example: x = x + 2;',
      'Great! You doubled your oxygen and we are good to go now!',
      ['Whoops! An error happened. Check if you used the right operator and assigned the result to oxygen.']
    );
  }

  testTask(json: JSON) {
    if (Object.keys(json).length === 6) {
      let expectedIdentifier = 'oxygen';
      let expectedOperator = '*';
      let expectedNumber = '2';

      if (json[1].value === '*') {
        var firstIdentifier = json[0].value;
        var equalSign = json[2].value;
        var secondIdentifier = firstIdentifier;
        var multiplySign = json[1].value;
        var number = json[3].value;
        var semicolon = json[4].value;
      }
      if (json[2].value === expectedIdentifier) {
        var firstIdentifier = json[0].value;
        var equalSign = json[1].value;
        var secondIdentifier = json[2].value;
        var multiplySign = json[3].value;
        var number = json[4].value;
        var semicolon = json[5].value;
      }
      if (json[2].value === expectedNumber) {
        var firstIdentifier = json[0].value;
        var equalSign = json[1].value;
        var secondIdentifier = json[4].value;
        var multiplySign = json[3].value;
        var number = json[2].value;
        var semicolon = json[5].value;
      }
      return validateIdentifier(firstIdentifier) && validateIdentifier(secondIdentifier)
        && checkIdentifier(firstIdentifier, expectedIdentifier) && checkEqualSign(equalSign)
        && checkIdentifier(secondIdentifier, expectedIdentifier) && checkOperator(multiplySign, expectedOperator)
        && validateNumber(number) && checkNumber(number, expectedNumber) && checkSemicolon(semicolon);
    }
    else {
      console.log('U might forgot something. The elements you typed in are only ' + Object.keys(json).length)
      return false;
    }
  }
}
