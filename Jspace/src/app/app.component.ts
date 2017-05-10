import {Component, ViewChild} from '@angular/core';
import {AceInputComponent}    from './ace-input/ace-input.component';
import {AceOutputComponent}   from './ace-output/ace-output.component';
import {AnalyseCodeService}   from './analyze-code/code.analyse-service';
import {TokenTestService}       from './test-code/token.test-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSpace!';
  titleInput = 'Input terminal';
  titleOutput = 'Output terminal';
  buttonNameOne = 'Task 1';
  buttonNameTwo = 'Task 2';
  buttonNameThree = 'Task 3';
  buttonShowJson = "Show JSON"

  constructor(private analyseCodeService: AnalyseCodeService, private tokenTestService: TokenTestService ) {}

  @ViewChild(AceInputComponent) aceInput: AceInputComponent;
  @ViewChild(AceOutputComponent) aceOutput: AceOutputComponent;

  runTaskOne() {
    
    var textFromInput = this.aceInput.getStringFromEditor();
    this.analyseCodeService.getTokenizedCode(textFromInput).subscribe(
      data => {
        data = this.tokenTestService.taskOneTest(data)
        if (data) {
          this.aceOutput.setEditorValue("Awesome, " + textFromInput.trim().toUpperCase() + "! It worked.")
        } else {
          this.aceOutput.setEditorValue("Ouch! Something went wrong. Please check if you spelled everything in the right way, first.")
        }
      }
    );
  }

  runTaskTwo() {
    
    var textFromInput = this.aceInput.getStringFromEditor();
    
    this.analyseCodeService.getTokenizedCode(textFromInput).subscribe(
      data => {
        data = this.tokenTestService.taskTwoTest(data)
        if (data) {
          this.aceOutput.setEditorValue("Good job you declared a variable with the name oxygen and a numeric value!")
        } else {
          this.aceOutput.setEditorValue("Ouch! Something went wrong. Please check if you spelled everything in the right way, first.")
        }
      }
    );
  }
  
  runTaskThree() {
    
    var textFromInput = this.aceInput.getStringFromEditor();
    this.analyseCodeService.getTokenizedCode(textFromInput).subscribe(
      data => {
        data = this.tokenTestService.taskThreeTest(data)
        if (data) {
          this.aceOutput.setEditorValue("Task 3 ok")
        } else {
          this.aceOutput.setEditorValue("Task 3 false")
        }
      }
    );
  }

//For testing or example purpose, should be removed later
  displayTokenizedCode() {
    var textFromInput = this.aceInput.getStringFromEditor();
    this.analyseCodeService.getTokenizedCode(textFromInput)
    .subscribe(data => this.aceOutput.setEditorValue(JSON.stringify(data,null,2)));
  }
}
