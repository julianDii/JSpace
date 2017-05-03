import { Component, ViewChild, OnInit } from '@angular/core';
import {AceInputComponent} from "./ace-input/ace-input.component";
import {AceOutputComponent} from "./ace-output/ace-output.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'JSpace!';
  titleInput = 'Input terminal';
  titleOutput = 'Output terminal';
  buttonName = 'Run';
  
  @ViewChild(AceInputComponent) aceInput: AceInputComponent;
  @ViewChild(AceOutputComponent) aceOutput: AceOutputComponent;

  state:number = 0;
  regExp = (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);
  name:string = "";
  noValidNameText = 'Sorry, this username does not seem to be a valid name.'
  startText:string = 'Oh no! It seems like you need to reboot your terminal! Otherwise you won’t be able to send an emergency message!'+ 
                     'For that you need to login. Please type in your name below.';

  ngOnInit(): void {
      this.changeOutputText()
    }

  setTextFromInputToOutput() {
    var textFromInput = this.aceInput.getStringFromEditor();
    console.log('sent text: ' + textFromInput);
    this.aceOutput.setEditorValue(textFromInput);
  }

  run() {
    this.name=this.aceInput.getStringFromEditor()
    let validatedName = this.validateName(this.name)
    if(!validatedName.error){
      this.state = 1;
    } else {
      this.state = 2;
      this.aceOutput.setEditorValue(validatedName.message);
    }
    this.changeOutputText()
  }

  validateName(name:string){
    if (name.length > 20) {
      return {error: true, message:this.noValidNameText + " The Name is too long"};
    }
    if (name.startsWith(" ")){
      return {error: true, message: this.noValidNameText + " This Name has whitespace at the start"}
    }
    if (this.regExp.test(name)){
      return {error: true, message: this.noValidNameText + " This Name contains special chars"}
    }
    if (name.length === 0) {
      return {error: true, message: this.noValidNameText + " Name can not be empty"}
    }
    return {error: false, message:name}
  }
  
  changeOutputText(){
    switch(this.state){
    case 0:
    this.aceOutput.setEditorValue(this.startText);
    break;
    case 1:
    this.aceOutput.setEditorValue("Awesome, " + this.name + "! It worked.");
    case 2:
    break;
  }
 }

}
