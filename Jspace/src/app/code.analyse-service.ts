import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AnalyseCodeService {
    private tokenizeCodeEndpoint = 'http://localhost:3000/api/user/tok';
    private parseCodeEndpoint = 'http://localhost:3000/api/user/parse';
    
    constructor(private http: Http) { }
    
    getTokenizedCode(code) {
      
      const url = `${this.tokenizeCodeEndpoint}/${code}`;
      console.log(url)
      return this.http.get(url)
        .map(response =>response.json())
    }

    taskOneTest(data):boolean{
      var p = data;
      console.log(JSON.stringify(p)) 
      if(p != undefined || data != ""){
        for (var key in p[0]) {
          if (p[0].hasOwnProperty(key)) {
            if(p[0][key] === "Identifier"){
                console.log(true)
                return true;
            } else return false;
          }
        }
      } 
    }

    taskTwoTest(data):boolean{
    var p = data;
    console.log(JSON.stringify(p))  
      if (p != undefined || data != ""){
        for (var key in p[0]) {
          if (p[0].hasOwnProperty(key)) {
            if
            (p[0][key] === "Keyword" && 
            (p[1][key] === "Identifier") && 
            (p[2][key] === "Punctuator") && 
            (p[3][key] === "Numeric") && 
            (p[4][key] === "Punctuator")){
              console.log("Variable is properly declared, but Identifier is not ok");
              for(var value in p[0]) {
                if (p[0].hasOwnProperty(value)) {
                  if
                  (p[1][value] === "oxygen"){
                    console.log("OXYGEN TRUE");
                    return true;
                  }
                }
              }
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

    taskThreeTest(data):boolean{
      var p = data;
      console.log(JSON.stringify(p)) 
      if(p != undefined || data != ""){
        for (var key in p[0]) {
          if (p[0].hasOwnProperty(key)) {
            if(p[0][key] === "Keyword"){
                console.log(true)
                return true;
            } else return false;
          }
        }
      } 
    }
}
