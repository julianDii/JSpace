import { Injectable }                  from '@angular/core';
import { Headers, Http }               from '@angular/http';
import { Code }                        from './code';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CodeService {
    private codeUrl = 'api/codes';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    
    getCoded(): Promise<Code[]> {
        return this.http.get(this.codeUrl)
               .toPromise()
               .then(response => response.json().data as Code[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCode(id: number): Promise<Code[]> {
      const url = `${this.codeUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Code[])
        .catch(this.handleError);
    }

  update(code: Code): Promise<Code> {
      const url = `${this.codeUrl}/${code.coded}`;
      return this.http
        .put(url, JSON.stringify(code.coded), {headers: this.headers})
        .toPromise()
        .then(() => code)
        .catch(this.handleError);
    }

    create(code: string): Promise<Code> {
    return this.http
      .post(this.codeUrl, JSON.stringify({code: code}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Code)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
      const url = `${this.codeUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

}