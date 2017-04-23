import {Component, ViewChild} from '@angular/core';

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
      mode: "ace/mode/javascript",
      printMargin: false,
      readOnly: true, // To simulate terminal only for output text
      showGutter: false
    });

    outputEditor.renderer.setScrollMargin(10);


  }

}
