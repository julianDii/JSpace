import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AnalyseCodeService {
    private tokenizeCodeEndpoint = 'http://localhost:3000/api/user/tok';
    private parseCodeEndpoint = 'http://localhost:3000/api/user/parse';
    code:string;
    json;
    
    constructor(private http: Http) { }
    
    getTokenizedCode(code) {
      this.code = code;
      const url = `${this.tokenizeCodeEndpoint}/${code}`;
      console.log(url)
      return this.http.get(url)
        .map(response =>this.json = response.json())
    }

    taskOneTest():boolean{
    var p = this.json;
    console.log(JSON.stringify(p))  
      if (p != undefined){
        for (var key in p[0]) {
          if (p[0].hasOwnProperty(key)) {
            if(p[0][key] === "Keyword" && (p[1][key] === "Identifier") && (p[2][key] === "Punctuator")){
              console.log("variable declaration = true");
              return true;
          } else {
            console.log("false")}
            return false;
          } else {
             console.log("undefined")
             return false;
            }
        }
      }
    }
}
