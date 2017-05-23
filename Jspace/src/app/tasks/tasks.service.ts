import { Injectable } from '@angular/core';
import { Task } from './task';

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

  getNumberOfAllTasks() {
    return this.allTasks.length;
  }

  getTasks() {
    let tasks = [
      new Task(
        0,
        "Lucky devil! You are lost in a JavaScript world." + "\n" +
        "It seems like you need to reboot your terminal! Otherwise you won’t be able to send an emergency message!" +
        "For that you need to login." + "\n" + "Please type in your name below." + "\n" + "\n" +
        "Remember:" + "\n" +
        "Identifiers are used to name variables, and functions. Their first character must be a letter, underscore or " +
        "dollar sign." + "\n" + "Following may be letters, digits underscores or dollar signs.",
        "Awesome! It worked.",
        ["Sorry, this username does not seem to be a valid name. Please try Again!"]
      ),
      new Task(
        1,
        "Lets go! I am running on JavaScript. To get back on track, you need to program and reconfigure me. Let’s get started " +
        "with the basics." + "\n" +
        "Syntax:" + "\n" +
        "A Program is a list of instructions to be executed by a machine." +
        "These instructions are called statements, in JS statements end with semicolons." + "\n" +
        "Blablabla Big Error-source, so don't forget them." + "\n" +
        "JS ignores multiple spaces, so the following is equal:" + "\n" +
        "a = 10;" + "\n" +
        "a =   	10;" + "\n" +
        "Since statements are separated by Semicolons you can also write them in one line, but you shouldn’t." + "\n" +
        "a = 5; b = 2; c = a + b;" + "\n" +
        "Variables:" + "\n" +
        "Variables are containers for storing data values. You declare a JavaScript variable with the var keyword:" + "\n" +
        "var x;" + "\n" +
        "After the declaration, the variable has no value. (Technically it has the value of undefined.)" +
        "To assign a value to the variable, use the equal sign:" + "\n" +
        "x = 33;" + "\n" +
        "You can also assign a value to the variable when you declare it:" + "\n" +
        "var x = 33;" + "\n" + "\n" +
        "Now it’s your turn. To make sure that you can reboot the bordcomputer clearheaded and unafraid, " +
        "you should raise and check your oxygen supply in the next step." + "\n" +
        "One of the many wonders of the JavaScript world is that you can just create things, so go ahead and give " +
        "yourself some oxygen." + "\n" + "\n" +
        "Firstly it’s enough to declare a simple variable called oxygen. You need to give it a value...10 seems to " +
        "be a good decision to accomplish your next tasks."
        ,
        "Yeah bro! You rock! You increased your oxygen level to SUBTITUTETHISPLACE. It can’t get any worse now.",
        ["Ouch! Something went wrong. Please check if you spelled everything in the right way, first." +
          "Your statement should contain 5 parts: the keyword to declare a variable, the identifier of the variable, " +
          "the assignment operator, the value of the variable as a number and the semicolon." +
          "Once again please."]
      ),
      new Task(
        2,
        "You can also calculate with JavaScript, try to double up your oxygen. To view the existing operators in" +
        " JavaScript enter operators().Note that the calculated value has to be stored and that you don’t need the" +
        "var-keyword.For example: x = x + 2;",
        "Great! You doubled your oxygen and we are good to go now!",
        ["Whoops! An error happened. Check if you used the right operator and assigned the result to oxygen."]
      )]
    return tasks;
  }
}
