import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DBDataService {
    private userHighscoresEndpoint = 'http://localhost:3000/highscores';

    constructor(private http: Http) { }

    headers = new Headers({
        'Content-Type': 'application/json'
    });

    getUserHighscoreData() {
        return this.http.get(this.userHighscoresEndpoint)
            .map(response => response.json()['message']);
    }

    addPlayerToHighscores(data: any): Observable<Response> {
        return this.http.post(
            this.userHighscoresEndpoint,
            JSON.stringify(data),
            { headers: this.headers }
        )
    }

}
