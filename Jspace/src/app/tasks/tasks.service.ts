import {Injectable} from '@angular/core';
import {Task} from "./task";

/**
 * TaskService manages all tasks in game and their validation
 */

@Injectable()
export class TasksService {

  // TODO: find out how to show the values from user in messages

  allTasks: Task[] = [];

  constructor() {
    console.log("tasks service injected")
    this.allTasks = this.getTasks();
    console.log("object with all tasks created")
  }

  getTask(taskNumber: number) {
    return this.allTasks[taskNumber];
  }

  validateCode(taskId: number, input: String){
    // TODO: implement elementar functions for code validation
    let solved: boolean = true;
    if (solved)
      return {solved: true, message: this.getTask(taskId).getMessageCorrect()};
    else
      return {solved: false, message: this.getTask(taskId).getMessagesFalse()[0]};
  }

  getNumberOfAllTasks() {
    return this.allTasks.length;
  }

  getTasks() {
    let tasks = [
      new Task(
        0,
        "Lucky devil! You are lost in a JavaScript world." +
        "It seems like you need to reboot your terminal! Otherwise you won’t be able to send an emergency message!" +
        "For that you need to login. Please type in your name below." +
        "Remember:" +
        "Identifiers are used to name variables, and functions." +
        "Their first character must be a letter, underscore or dollar sign." +
        "Following may be letters, digits underscores or dollar signs.",
        "Awesome, 'NAME'! It worked.",
        ["Sorry, this username does not seem to be a valid name."]
       ),
      new Task(
        1,
        "I am running on JavaScript. To get back on track, you need to program and reconfigure me. Let’s get started with the basics." +
        "Syntax:" +
        "A Program is a list of instructions to be executed by a machine." +
        "These instructions are called statements, in JS statements end with semicolons." +
        "Big Error-source, so don't forget them." +
        "JS ignores multiple spaces, so the following is equal:" +
        "a = 10;" +
        "a =   	10;" +
        "Since statements are separated by Semicolons you can also write them in one line, but you shouldn’t." +
        "a = 5; b = 2; c = a + b;" +
        "Variables:" +
        "variables are containers for storing data values." +
        "You declare a JavaScript variable with the var keyword:" +
        "var x;" +
        "After the declaration, the variable has no value. (Technically it has the value of undefined.)",
        "Yeah! You rock! You increased your oxygen level to 'VALUE'. It can’t get any worse now.",
        ["Ouch! Something went wrong. Please check if you spelled everything in the right way, first." +
        "Your statement should contain 5 parts: the keyword to declare a variable, the identifier of the variable, " +
        "the assignment operator, the value of the variable as a number and the semicolon." +
        "Once again please."]
      )]
    return tasks;
  }
}
