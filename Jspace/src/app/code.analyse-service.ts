import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AnalyseCodeService {
    private tokenizeCodeEndpoint = 'http://localhost:3000/api/user/tok';
    private parseCodeEndpoint = 'http://localhost:3000/api/user/parse';

    responseJson:JSON;
    
    constructor(private http: Http) { }
    
    getTokenizedCode(code) {
    const url = `${this.tokenizeCodeEndpoint}/${code}`;
    return this.http.get(url)
        .map((res:Response) => this.responseJson = res.json());
    }

    taskOneTest():boolean{
      
      var p= this.responseJson;
      if (p != undefined){
        for (var key in p[0]) {
          if (p[0].hasOwnProperty(key)) {
            if(p[0][key] === "Keyword" && (p[1][key] === "Identifier") && (p[2][key] === "Punctuator")){
              console.log("variable declaration = true");
              return true;
          } else {
            console.log("false")}
            return false;
          }
          else{
            return false;
          }
        }
      }
    }
}
