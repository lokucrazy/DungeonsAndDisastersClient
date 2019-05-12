import { Component, OnInit } from '@angular/core';
import { Session } from '../models/Session';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetuserService } from '../services/getuser.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  user: User;
  selection: string;
  choices: string[] = ['New Game', 'New Session'];
  newSession: Session;
  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';
  request: string;
  newgameID: string;
  newsessionID: string;
  newID: string;
  DMID: string;

  constructor(private getuserservice: GetuserService,
              private http: HttpClient ) {
                this.newSession = {
                  identifier: null,
                  session_state: false,
                  created_at: null,
                  modified_at: null,
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
                  character_ids: null};
              }

  ngOnInit() {
    this.user = this.getuserservice.getUser();
  }

  public newGameRequest() {
    this.newSession.dm_id = this.user.identifier;
    this.http.post<Session>(this.link, this.newSession, httpOptions)
      .subscribe(data => {
        if ( this.user.dm_session_ids === undefined || this.user.dm_session_ids.length === 0 ) {
          this.user.dm_session_ids = [data.identifier];
        } else {
        this.user.dm_session_ids.push(data.identifier);
        }
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.newID = data.identifier;
        return data.identifier;
      },
      err => console.log(err)
      );
  }

  public newSessionRequest(sessionID: string) {
    this.newSession.dm_id = this.user.identifier;
    this.newSession.identifier = sessionID;
    this.http.post<Session>(this.link, this.newSession, httpOptions)
    .subscribe(data => {
      if ( this.user.dm_session_ids === undefined || this.user.dm_session_ids.length === 0 ) {
        this.user.dm_session_ids = [data.identifier];
      } else {
      this.user.dm_session_ids.push(data.identifier);
      }
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.newID = data.identifier;
      return data.identifier;
    },
    err => console.log(err));
  }
}
