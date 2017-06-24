import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from './game/game.service';
import { TasksService } from './tasks/tasks.service';
import { AceOutputComponent } from './ace-output/ace-output.component';
import { AceInputComponent } from './ace-input/ace-input.component';
import { viewClassName } from '@angular/compiler';
import { MentorComponent } from './mentor/mentor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService, TasksService]
})

export class AppComponent implements OnInit {

  title = '';
  titleInput = 'Input terminal';
  titleOutput = 'Output terminal';
  btnRun = 'Run';
  btnNext = 'Next';
  imgPath: string = "./assets/img/joystick.png";

  @ViewChild(MentorComponent) mentor: MentorComponent;
  @ViewChild(AceInputComponent) aceInput: AceInputComponent;
  @ViewChild(AceOutputComponent) aceOutput: AceOutputComponent;

  constructor(private game: GameService) { }

  ngOnInit() {
    this.game.newGame(this.mentor, this.aceInput, this.aceOutput);
  }
}
