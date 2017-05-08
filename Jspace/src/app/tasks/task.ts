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
    private messagesWrong: String[]
  ) {}


  getInstruction(): String {
    return this.instruction;
  }

  getMessageCorrect(valueFromUser: string = ""): String {
    console.log(valueFromUser)
    return this.setValueFromUserToMessages(valueFromUser, this.messageCorrect);
  }

  getMessagesWrong(valueFromUser: String = ""): String[] {
    return this.messagesWrong;
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

  setValueFromUserToMessages(valueFromUser: string, message: String) {
    return message.replace(/SUBTITUTETHISPLACE/, valueFromUser);
  }

}
