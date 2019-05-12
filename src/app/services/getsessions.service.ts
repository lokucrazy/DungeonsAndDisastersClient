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
  session: Session;
  request: string;
  found: boolean;
  i: number;
  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';

  constructor(private http: HttpClient) {
    this.session = {
      identifier: null,
      session_state: null,
      created_on: null,
      last_modified_on: null,
      dm_id: null,
      non_combat_log: null,
      combat_log: null,
      date_ended: null,
      history_id: null,
      chat_id: null,
      map_id: null,
      combat_id: null,
      npc_ids: null,
      player_ids: null,
      character_ids: null
    };
  }

  getSessions(sessionids: string[] ) {
    const array = sessionids;
    if (sessionids === undefined || sessionids.length === 0) {
      return null;
    }
    if (sessionids.length === this.sessions.length) {
      return this.sessions;
    }
    for (const id of array) {
      this.requestSession(id)
        .subscribe(
          data => {
            this.sessions.push(data);
          },
          err => {
            console.log(err);
      });
    }
    return this.sessions;
  }

  private requestSession(id: string) {
    this.request = this.link.concat(id);
    return this.http.get<Session>(this.request);
  }
}
