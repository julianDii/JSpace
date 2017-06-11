import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnalyseCodeService {
    private tokenizeCodeEndpoint = 'http://localhost:3000/api/user/tok';
    private parseCodeEndpoint = 'http://localhost:3000/api/user/parse';

    constructor(private http: Http) { }

    getTokenizedCode(code) {
        console.log('code as string:', code);
        code = code.trim();
        code = code.replace(new RegExp('/', 'g'), '%2F');
        console.log('code as string reformatted for url:', code);

        const url = `${this.tokenizeCodeEndpoint}/${code}`;
        console.log(url)
        return this.http.get(url)
            .map(response => response.json())
    }
}
