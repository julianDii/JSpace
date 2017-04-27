import { Component, ViewChild, OnInit } from '@angular/core';
import { Code }                         from './code';
import { Subject }                      from 'rxjs/Subject';
import { Observable }                   from 'rxjs/Observable';
import { CodeTestSevice }               from './code-test.service'
import { CodeService }                  from './code.service'
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ace-component',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css'],
  providers:[CodeTestSevice]
})

export class AceComponent implements OnInit {
  
  private typedCode = new Subject<string>();
  codes: Observable<Code[]>;
  constructor(
    private codeTestService: CodeTestSevice) {}
  
  @ViewChild('editor') editor;
  text:string = "";

  onChange(term:string): void {
    this.typedCode.next(term);
    console.log(term);
  }
  ngOnInit(): void {
     this.codes = this.typedCode
     .debounceTime(300)
     .distinctUntilChanged()      
     .switchMap(term => term
     ? this.codeTestService.search(term)
        : Observable.of<Code[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Code[]>([]);
      });
    }

  ngAfterViewInit() {
        this.editor.getEditor().setOptions({ });
        this.editor.getEditor().getSession().setMode("ace/mode/javascript");
    }
}