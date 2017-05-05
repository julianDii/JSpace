/**
 * Class Task represent a structure for one task. It has an id, instruction, message for correct answer and message for
 * wrong answer
 */

export class Task {

  // TODO: find out how to show the values from user in messages

  constructor(
    private id: number,
    private instruction: String,
    private messageCorrect: String,
    private messagesFalse: String[]
  ) {}


  getInstruction(): String {
    return this.instruction;
  }

  getMessageCorrect(): String {
    return this.messageCorrect;
  }

  getMessagesFalse(): String[] {
    return this.messagesFalse;
  }


  setInstruction(value: String) {
    this.instruction = value;
  }

  setMessageCorrect(value: String) {
    this.messageCorrect = value;
  }

  setMessagesFalse(value: String[]) {
    this.messagesFalse = value;
  }
}
