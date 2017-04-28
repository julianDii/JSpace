import {Component, ViewChild} from '@angular/core';
import {AceInputComponent} from "./ace-input/ace-input.component";
import {AceOutputComponent} from "./ace-output/ace-output.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSpace!';
  titleInput = 'Input terminal';
  titleOutput = 'Output terminal';
  buttonName = 'Run';

  @ViewChild(AceInputComponent) aceInput: AceInputComponent;
  @ViewChild(AceOutputComponent) aceOutputEvalFunction: AceOutputComponent;

  run() {
    var textFromInput = this.aceInput.sendCode();
    console.log('sent text: ' + textFromInput);
    console.log();
    this.aceOutputEvalFunction.showAnswer(textFromInput);
  }
}
