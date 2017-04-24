import {Component, ViewChild} from '@angular/core';
import {AceInputComponent} from "./ace-input/ace-input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSpace!';
  titleInput = 'Input terminal'
  titleOutput = 'Output terminal'

  @ViewChild(AceInputComponent) sendCode: AceInputComponent;

  send() {
    console.log('send text: ' + this.sendCode.sendCode());
  }
}
