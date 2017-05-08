import {Injectable, ViewChild}  from '@angular/core';
import {TasksService}           from '../tasks/tasks.service';
import {Task}                   from 'app/tasks/task';
import {AceInputComponent}      from '../ace-input/ace-input.component';
import {AceOutputComponent}     from '../ace-output/ace-output.component';
import {CodeAnalyzeService}     from '../analyze/analyze.service'

/**
 * GameService controls the game progress:
 * - creates new game
 * - shows task instructions in output editor
 * - gets code from input editor
 * - sends the code to validation
 * - gets the answer from validation
 * - and shows the answer in output editor, if the answer is correct gameService enables next button and shows
 *   instructions of next task
 */

@Injectable()
export class GameService {

  currentTask: Task;
  currentTaskNumber: number;
  isOver: boolean;
  aceInput: AceInputComponent;
  aceOutput: AceOutputComponent;
  btnNextDisabled: boolean;

  constructor(private tasksService: TasksService) {
    console.log("game service injected")
  }

  newGame(aceIn: AceInputComponent, aceOut: AceOutputComponent) {
    console.log("creating new game...")
    this.aceInput = aceIn;
    this.aceOutput = aceOut;
    this.currentTaskNumber = 0;
  
    this.currentTask = this.tasksService.getTask(this.currentTaskNumber);
    this.isOver = false;
    console.log(this.currentTask);
    this.aceOutput.setEditorValue(this.currentTask.getInstruction());
    this.aceInput.clearEditor();
    this.btnNextDisabled = true;
  }

  validateCode() {
    let textFromInput = this.aceInput.getStringFromEditor();
    // TODO: implement syntax checking before validating code
    console.log('text from input: ' + textFromInput);
    let answer = this.tasksService.validateCode(this.currentTaskNumber,textFromInput);
    if (answer.solved) {
      this.btnNextDisabled = false;
    }
    this.aceOutput.setEditorValue(answer.message);
    console.log("current task", this.currentTask);
  }
  
  getCurrentTaskNumber():number {
    return this.currentTaskNumber
  }

  goToNextTask() {
    this.currentTaskNumber++;
    if (this.currentTaskNumber == this.tasksService.getNumberOfAllTasks()) {
      this.isOver = true;
      this.aceOutput.setEditorValue("GAME OVER");
      this.aceInput.clearEditor();
      this.btnNextDisabled = true;
    }
    else
    {
      this.currentTask = this.tasksService.getTask(this.currentTaskNumber);
      this.aceOutput.setEditorValue(this.currentTask.getInstruction());
      this.aceInput.clearEditor();
      this.btnNextDisabled = true;
    }
    console.log("game over", this.isOver)
    console.log("current task", this.currentTask);
  }
}
