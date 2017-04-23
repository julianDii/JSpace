import { Injectable }                        from '@angular/core';
import { Http }                              from '@angular/http';
import { Observable }                        from 'rxjs/Observable';
import { Code }                              from './code';
import 'rxjs/add/operator/map';

@Injectable()
export class CodeTestSevice {
  constructor(private http: Http) {}
  
  search(term: string): Observable<Code[]> {
    console.log("searchTerm:  " + term); 
    return this.http
               .get(`app/codes/?coded=${term}`)
               .map(response => response.json().data as Code[]);
            }
        }