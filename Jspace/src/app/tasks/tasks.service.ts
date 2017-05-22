import { Injectable } from '@angular/core';
import { Task } from './task';
import { TaskName } from './taskName';
import { TaskOxygen } from './taskOxygen';
import { TaskOxygenDouble } from "./taskOxygenDouble";

/**
 * TaskService manages all tasks in game and their validation
 */

@Injectable()
export class TasksService {

  // TODO: find out how to show the values from user in messages

  private allTasks: Task[] = [];

  constructor() {
    console.log('tasks service injected')
    this.allTasks = this.getTasks();
    console.log('list with all tasks created')
  }

  getTask(taskNumber: number) {
    return this.allTasks[taskNumber];
  }

  getNumberOfAllTasks() {
    return this.allTasks.length;
  }

  private getTasks() {
    return [
      new TaskName(),
      new TaskOxygen(),
      new TaskOxygenDouble()
    ];
  }
}
