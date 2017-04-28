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

    // FOR TESTING
    var function1 = "var me = 'jana'; " + "\n" +
      "function foo(name) {" + "\n" +
      "var x = 3; " + "\n" +
      "var y = 'hello '; " + "\n" +
      "return y+name; " + "\n" +
      "} " + "\n" +
      "foo(me);"

    inputEditor.setValue(function1);
    // END TESTING
  }

  sendCode() {
    // annotations are syntax errors, infos or warnings
    // ANNOTATION OBJECT - DOCUMENTATION
    // { row:82,
    //   column:22,
    //   text:"Use the array literal notation [].",
    //   type:"warning",
    //   lint:{/*raw output from jslint*/}
    // }
    var annotations = this.inputEditor.getEditor().session.getAnnotations();
    console.log(annotations);

    if (annotations.length != 0) {
      // send annotations object if editor shows any annotations
      return ['error', annotations];
    }
    // send code typed in input editor
    return ['code', this.inputEditor.getEditor().getValue()];
  }

}
