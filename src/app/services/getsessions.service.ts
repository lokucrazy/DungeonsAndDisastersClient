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

  request: string;
  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';

  constructor(private http: HttpClient) {
  }

  getSessions(sessionid: string): Observable <Session> {
    this.request = this.link.concat(sessionid);
    return this.http.get<Session>(this.request, httpOptions);
  }

}
