/**
 * Class Task represent a structure for one task. It has an id, instruction, message for correct answer and message for
 * wrong answer
 */

export abstract class Task {

  // TODO: find out how to show the values from user in messages

  constructor(
    private id: number,
    private mentorText: string,
    private instruction: string,
    private mentorAnswerCorrect: string,
    private mentorAnswerWrong: string,
    private messageCorrect: string,
    private messagesWrong: string[]
  ) {
    console.log('id', this.id)
  }

  abstract testTask(json: JSON): boolean;

  static setValueFromUserToMessages(valueFromUser: string, message: string) {
    return message.replace(/SUBTITUTETHISPLACE/, valueFromUser);
  }

  setMessageCorrect(message: string) {
    this.messageCorrect = message;
  }

  setMentorAnswerWrong(message: string) {
    this.mentorAnswerWrong = message;
  }

  getTaskId(): number {
    return this.id;
  }

  getMentorText(): string {
    return this.mentorText.replace(new RegExp('\n', 'g'), "<br/> <br/>");
  }

  getInstruction(): string {
    return this.instruction;
  }

  getMentorAnswerCorrect(valueFromUser: string = ""): string {
    return Task.setValueFromUserToMessages(valueFromUser, this.mentorAnswerCorrect);
  }

  getMentorAnswerWrong(): string {
    return this.mentorAnswerWrong;
  }

  getMessageCorrect(valueFromUser: string = ""): string {
    return Task.setValueFromUserToMessages(valueFromUser, this.messageCorrect);
  }

  getMessageWrong(valueFromUser: string = ""): string {
    return this.messagesWrong[0];
  }
}
