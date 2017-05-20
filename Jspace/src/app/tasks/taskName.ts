import {Task} from "./task";
import {removeQuotationMarks, validateIdentifier} from "../test-code/helpers";

export class TaskName extends Task {

  constructor() {
    super(
      0,
      "Lucky devil! You are lost in a JavaScript world." + "\n" +
      "It seems like you need to reboot your terminal! Otherwise you won’t be able to send an emergency message!" +
      "For that you need to login. Please type in your name below." + "\n" + "\n" +
      "Remember:" + "\n" +
      "Identifiers are used to name variables, and functions. Their first character must be a letter, underscore or " +
      "dollar sign. Following may be letters, digits underscores or dollar signs.",
      "Awesome, SUBTITUTETHISPLACE! It worked.",
      ["Sorry, this username does not seem to be a valid name. Please try Again!"]
    );
  }

  testTask(json: JSON) {
    let input = json[0].value;
    let remove = removeQuotationMarks(input);
    return validateIdentifier(input);
  }
}
