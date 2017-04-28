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
  titleOutputEvalFunction = 'Output terminal code evaluation with eval() function';
  titleOutputWebWorker = 'Output terminal code evaluation with WebWorker';
  buttonName = 'Run';

  @ViewChild(AceInputComponent) aceInput: AceInputComponent;

  // output for evaluating the code with js eval() function, but
  // eval() can cause serious problems:
  // 1. Security: Improper use of eval opens up our code for injection attacks
  // 2. Performace: It works synchronously -> can block the website with infinite loop
  @ViewChild(AceOutputComponent) aceOutputEvalFunction: AceOutputComponent;
  
  // TODO
  // Find another way how to execute the code got from input terminal -> try Web Worker
  @ViewChild(AceOutputComponent) aceOutputWebWorker: AceOutputComponent;

  run() {
    // get code or annotations from input editor
    var sentFromInput = this.aceInput.sendCode();
    console.log('sent text: ' + sentFromInput);

    var inputFlag = sentFromInput[0];
    var inputContent = sentFromInput[1];

    // ANNOTATION OBJECT - DOCUMENTATION
    // { row:82,
    //   column:22,
    //   text:"Use the array literal notation [].",
    //   type:"warning",
    //   lint:{/*raw output from jslint*/}
    // }

    // if flag is 'error' then annotations were sent from input editor
    if (inputFlag === 'error') {
      var message = "";
      for (var key in inputContent) {
        message += inputContent[key].type.toUpperCase() + " on line " + (parseInt(inputContent[key].row) + 1) + ": " + inputContent[key].text + "\n";
      }
      console.log(message);
      this.aceOutputEvalFunction.showAnswer(message);
    }

    // if flag is 'code' than js code was sent from input editor
    else if (inputFlag === 'code') {
      var evaluatedCode = eval(inputContent);
      console.log('answer: ' + evaluatedCode);
      if (evaluatedCode) {
        this.aceOutputEvalFunction.showAnswer(evaluatedCode.toString());
      } else {
        this.aceOutputEvalFunction.showAnswer("You forgot to initialize the function.");
      }

    }

  }
}
