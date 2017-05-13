import {Injectable}              from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import                                'rxjs/add/operator/map';
import {Observable}              from 'rxjs/Observable';

@Injectable()
export class AnalyseCodeService {
    private tokenizeCodeEndpoint = 'http://localhost:3000/api/user/tok';
    private parseCodeEndpoint = 'http://localhost:3000/api/user/parse';
    
    constructor(private http: Http) { }
    
    getTokenizedCode(code) {
      const url = `${this.tokenizeCodeEndpoint}/${code}`;
      console.log(url)
      return this.http.get(url)
        .map(response => response.json())
    }  
}
