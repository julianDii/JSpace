import { Component, ViewChild } from '@angular/core';
@Component({

  selector: 'app-root',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css']
})
export class AceComponent {
  @ViewChild('editor') editor;
  text:string = "";

  ngAfterViewInit() {
        this.editor.getEditor().setOptions({
        });
        this.editor.getEditor().getSession().setMode("ace/mode/javascript");
    }

}