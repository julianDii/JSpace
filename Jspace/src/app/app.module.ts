import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AceEditorComponent }   from 'ng2-ace-editor';
import { AceComponent }         from './ace.component';
import { AppComponent }         from './app.component';
import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory.data-service';
import { CodeService }          from './code.service';

@NgModule({
  declarations: [
    AppComponent,
    AceEditorComponent,
    AceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [CodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
