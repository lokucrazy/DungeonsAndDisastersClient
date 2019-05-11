import { Injectable } from '@angular/core';
import { Session } from '../models/Session';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GetsessionsService {

  sessions: Session[] = [];
  request: string;
  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';

  constructor(private http: HttpClient) { }

  getSessions(sessionids: string[] ) {

    const array = sessionids;
    if(sessionids === null || sessionids.length === 0) {
      return null;
    }
    for (const id of array) {
      this.request = this.link.concat(id);
      this.http.get<Session>(this.request)
      .subscribe(data => {
        this.sessions.push(data);
      });
    }
    return this.sessions;
  }
}
