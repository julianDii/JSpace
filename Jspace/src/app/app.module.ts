import {BrowserModule}        from '@angular/platform-browser';
import {NgModule}             from '@angular/core';
import {FormsModule}          from '@angular/forms';
import {HttpModule}           from '@angular/http';
import {AceEditorComponent}   from 'ng2-ace-editor';
import {AceInputComponent}    from './ace-input/ace-input.component';
import {AppComponent}         from './app.component';
import {AceOutputComponent}   from './ace-output/ace-output.component';
import {GameService}          from "./game/game.service";
import {TasksService}         from "./tasks/tasks.service";

@NgModule({
  declarations: [
    AppComponent,
    AceEditorComponent,
    AceInputComponent,
    AceOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GameService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
