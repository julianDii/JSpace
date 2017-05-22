
export function validateIdentifier(input: string) {
  return checkInputLength(input) && checkFirstLetter(input) && checkFollowingLetters(input);
}

export function validateNumber(number: string) {
  return /^\d*$/.test(number);
}

export function removeQuotationMarks(input: string) {
  if (stringEqualsString(input[0], "\"")) input = input.replace("\"", "");
  if (stringEqualsString(input[input.length - 1], "\"")) input = input.replace("\"", "");
  return input;
}

export function checkInputLength(input: string) {
  return input.length <= 20;
}

export function checkFirstLetter(input: string) {
  let firstLetter = input[0];
  return new RegExp(/[a-z]|_|\$/i).test(firstLetter);
}

export function checkFollowingLetters(input: string) {
  for (let i = 1; i < input.length; i++) {
    let char = input[i];
    let result = new RegExp(/[a-z]|_|\$|\d/i).test(char);
    if (result === false) return false;
  }
  return true;
}

export function stringEqualsString(string1: string, string2: string) {
  return string1 === string2;
}

export function checkInterval(number: number, min: number, max: number) {
  return number <= max && number > min;
}

export function checkNumber(number: string, expectedNumber: string) {
  return stringEqualsString(number, expectedNumber);
}

export function checkSemicolon(semicolon: string) {
  return stringEqualsString(semicolon, ";");
}

export function checkIdentifier(identifier: string, expectedIdentifier: string) {
  return stringEqualsString(identifier, expectedIdentifier);
}

export function checkOperator(operator: string, expectedOperator: string) {
  return stringEqualsString(operator, expectedOperator);
}

export function checkKeyword(keyword: string) {
  return stringEqualsString(keyword, "var");
}

export function checkEqualSign(equalSign: string) {
  return stringEqualsString(equalSign, "=");
}
