import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'ace-input-component',
  templateUrl: './ace-input.component.html',
  styleUrls: ['./ace-input.component.css']
})
export class AceInputComponent {
  @ViewChild('inputEditor') inputEditor;
  // @ViewChild('outputEditor') outputEditor;
  text: string = "";
  buttonName = 'Run';

  ngAfterViewInit() {
    var inputEditor = this.inputEditor.getEditor();
    // var outputEditor = this.outputEditor.getEditor();
    var inputText = '';
    inputEditor.setOptions({
      mode: "ace/mode/javascript",
      printMargin: false,
      readOnly: false,
      showGutter: true
    });

    inputEditor.renderer.setScrollMargin(10);

    // To listen for an onchange:
    inputEditor.on('change', function (e) {
      inputText = inputEditor.getValue(); // Get the content of input editor
      // outputEditor.setValue(inputText); // Write into output editor
      console.log(inputText);
      console.log("number of lines: " + inputEditor.session.getLength()); // Get total number of lines
    });
  }

  sendCode() {
    return this.inputEditor.getEditor();
  }

}
