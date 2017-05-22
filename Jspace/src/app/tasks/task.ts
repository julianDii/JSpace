/**
 * Class Task represent a structure for one task. It has an id, instruction, message for correct answer and message for
 * wrong answer
 */

export abstract class Task {

  // TODO: find out how to show the values from user in messages

  constructor(
    private id: number,
    private instruction: String,
    private messageCorrect: String,
    private messagesWrong: String[]
  ) {
    console.log('id', this.id)
  }

  getInstruction(): String {
    return this.instruction;
  }

  getMessageCorrect(valueFromUser: string = ""): String {
    return Task.setValueFromUserToMessages(valueFromUser, this.messageCorrect);
  }

  getMessageWrong(valueFromUser: String = ""): String {
    return this.messagesWrong[0];
  }

  setInstruction(value: String) {
    this.instruction = value;
  }

  setMessageCorrect(value: String) {
    this.messageCorrect = value;
  }

  setMessagesWrong(value: String[]) {
    this.messagesWrong = value;
  }

  static setValueFromUserToMessages(valueFromUser: string, message: String) {
    return message.replace(/SUBTITUTETHISPLACE/, valueFromUser);
  }

  abstract testTask(json: JSON): boolean;
}
