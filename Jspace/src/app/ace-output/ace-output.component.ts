import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'ace-output-component',
  templateUrl: './ace-output.component.html',
  styleUrls: ['./ace-output.component.css']
})
export class AceOutputComponent {
  @ViewChild('outputEditor') outputEditor;
  text: string = "";

  ngAfterViewInit() {
    var outputEditor = this.outputEditor.getEditor();

    outputEditor.setOptions({
      mode: "ace/mode/text",
      printMargin: false,
      readOnly: true,
      showGutter: false,
      highlightActiveLine: false,
      wrapBehavioursEnabled: true,
      wrap: "free"
    });
    outputEditor.renderer.setScrollMargin(10);
  }

  setEditorValue(text) {
    this.outputEditor.getEditor().setValue(text);
    this.outputEditor.getEditor().navigateFileStart();
  }

}
