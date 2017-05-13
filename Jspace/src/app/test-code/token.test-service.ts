export class TokenTestService {

  taskOneTest(json: JSON): boolean {

    var input = json[0].value;
    var remove = removeQuotationMarks(input);
    return validateIdentifier(input);
  }
  
  taskTwoTest(json: JSON): boolean {
    if (Object.keys(json).length === 5){
      var expectedIdentifier = "oxygen";
      var expectedMin = 0;
      var expectedMax = 100;
      var keyword = json[0].value;
      var identifier = json[1].value;
      var equalSign = json[2].value;
      var number = json[3].value;
      var semicolon = json[4].value;
      return checkKeyword(keyword) && checkIdentifier(identifier, expectedIdentifier) && validateIdentifier(identifier) && checkequalSign(equalSign) && validateNumber(number) && checkInterval(number, expectedMin, expectedMax) && checkSemicolon(semicolon);
  } else {
    console.log("U might forgot something. The elements you typed in are only " +  Object.keys(json).length)
    return false;
  } 
}

taskThreeTest(json: JSON): boolean {
    if (Object.keys(json).length === 6) {
      var expectedIdentifier = "oxygen";
      var expectedOperator = "*";
      var expectedNumber = "2";

    if (json[1].value === "*") {
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
    return validateIdentifier(firstIdentifier) && validateIdentifier(secondIdentifier) && checkIdentifier(firstIdentifier, expectedIdentifier) && checkequalSign(equalSign) && checkIdentifier(secondIdentifier, expectedIdentifier) && checkOperator(multiplySign, expectedOperator) && validateNumber(number) && checkNumber(number, expectedNumber) && checkSemicolon(semicolon);
  }
  else {
    console.log("U might forgot something. The elements you typed in are only " +  Object.keys(json).length)
    return false;
  }
}

}
// Support Functions
function validateIdentifier(input) {
  return checkInputLength(input) && checkFirstLetter(input) && checkFollowingLetters(input);
}

function validateNumber(number) {
  return /^\d*$/.test(number);
}

function removeQuotationMarks(input) {
  if (stringEqualsString(input[0], "\"")) input = input.replace("\"", "");
  if (stringEqualsString(input[input.length - 1], "\"")) input = input.replace("\"", "");
  return input;
}

function checkInputLength(input) {
  return input.length <= 20;
}

function checkFirstLetter(input) {
  var firstLetter = input[0];
  return new RegExp(/[a-z]|_|\$/i).test(firstLetter);
}

function checkFollowingLetters(input) {
  for (var i = 1; i < input.length; i++) {
    var char = input[i];
    var result = new RegExp(/[a-z]|_|\$|\d/i).test(char);
    if (result === false) return false;
  }
  return true;
}

function stringEqualsString(string1, string2) {
  return string1 === string2;
}

function checkInterval(number, min, max) {
  return number <= max && number > min;
}

function checkNumber(number, expectedNumber) {
  return stringEqualsString(number, expectedNumber);
}

function checkSemicolon(semicolon) {
  return stringEqualsString(semicolon, ";");
}

function checkIdentifier(identifier, expectedIdentifier) {
  return stringEqualsString(identifier, expectedIdentifier);
}

function checkOperator(operator, expectedOperator) {
  return stringEqualsString(operator, expectedOperator);
}

function checkKeyword(keyword) {
  return stringEqualsString(keyword, "var");
}

function checkequalSign(equalSign) {
  return stringEqualsString(equalSign, "=");
}