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
  }

  getStringFromEditor() {
    return this.inputEditor.getEditor().getValue();
  }

  setEditorValue(text) {
    this.inputEditor.getEditor().setValue(text);
  }
}
