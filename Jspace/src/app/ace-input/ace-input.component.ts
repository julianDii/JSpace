import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'ace-input-component',
  templateUrl: './ace-input.component.html',
  styleUrls: ['./ace-input.component.css']
})
export class AceInputComponent {
  @ViewChild('inputEditor') inputEditor;
  text: string = "";

  ngAfterViewInit() {
    var inputEditor = this.inputEditor.getEditor();

    inputEditor.setOptions({
      mode: "ace/mode/javascript",
      printMargin: false,
      readOnly: false,
      showGutter: true
    });
    inputEditor.renderer.setScrollMargin(10);

    // To listen for an onchange:
    inputEditor.on('change', function (e) {
      // console.log(inputEditor.getValue());
      // console.log("number of lines: " + inputEditor.session.getLength()); // Get total number of lines
    });
  }

  sendCode() {
    return this.inputEditor.getEditor().getValue(); // Get the content of input editor
  }

}
