import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Code }                    from './code';
import 'rxjs/add/operator/map';

@Injectable()
export class AnalyseCodeService {
    private tokenizeCodeEndpoint = 'http://localhost:3000/api/user/tok';
    private parseCodeEndpoint = 'http://localhost:3000/api/user/parse';
    
    constructor(private http: Http) { }
    
    getTokenizedCode(code) {
    const url = `${this.tokenizeCodeEndpoint}/${code}`;
    return this.http.get(url)
    .map((res:Response) => res.json());
  }
}