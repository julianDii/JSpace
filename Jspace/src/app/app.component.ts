import {Component, OnInit, ViewChild} from '@angular/core';
import {GameService} from "./game/game.service";
import {TasksService} from "./tasks/tasks.service";
import {AceOutputComponent} from "./ace-output/ace-output.component";
import {AceInputComponent} from "./ace-input/ace-input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService, TasksService]
})

export class AppComponent implements OnInit{
  
  title = 'JSpace!';
  titleInput = 'Input terminal';
  titleOutput = 'Output terminal';
  btnRun = 'Run';
  btnNext = 'Next';

  @ViewChild(AceInputComponent) aceInput: AceInputComponent;
  @ViewChild(AceOutputComponent) aceOutput: AceOutputComponent;

  constructor(private game: GameService,task:TasksService) {}

  ngOnInit() {
    this.game.newGame(this.aceInput, this.aceOutput); 
    console.log("new game created")
   
  }

}
