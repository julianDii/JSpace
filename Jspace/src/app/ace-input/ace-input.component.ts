import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'ace-input-component',
  templateUrl: './ace-input.component.html',
  styleUrls: ['./ace-input.component.css']
})
export class AceInputComponent {
  @ViewChild('inputEditor') inputEditor;
  text: string = "";

  ngAfterViewInit() {
    let inputEditor = this.inputEditor.getEditor();
    inputEditor.focus();
    inputEditor.setOptions({
      mode: "ace/mode/javascript",
      printMargin: false,
      readOnly: false,
      showGutter: true,
    });
    inputEditor.renderer.setScrollMargin(10);
  }

  getStringFromEditor() {
    return this.inputEditor.getEditor().getValue();
  }

  clearEditor() {
    this.inputEditor.getEditor().setValue("");
  }

  setEditorValue(text) {
    this.inputEditor.getEditor().setValue(text);
  }

  setEditorFocus() {
    let inputEditor = this.inputEditor.getEditor();
    inputEditor.focus();
  }
}
