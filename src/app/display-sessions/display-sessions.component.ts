import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { GetuserService } from '../services/getuser.service';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetsessionsService } from '../services/getsessions.service';
import { Session, SessionState } from '../models/Session';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-display-sessions',
  templateUrl: './display-sessions.component.html',
  styleUrls: ['./display-sessions.component.css']
})
export class DisplaySessionsComponent implements OnInit {

  constructor(private getuserservice: GetuserService,
              private http: HttpClient,
              private getsessionservice: GetsessionsService) {
                this.session = {
                  identifier: null,
                  session_state: {running : true},
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

  user: User;
  DMsessionflag = false;
  Playersessionflag = false;
  playerSessions: Session[] = [];
  DMsessions: Session[] = [];
  session: Session;
  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';
  activeStatus: SessionState = { running : undefined};
  turbolink: string;

  ngOnInit() {
    this.user = this.getuserservice.getUser();
    if ( this.user.dm_session_ids === null || this.user.dm_session_ids.length === 0) {
      this.DMsessionflag = false;
    } else {
      this.DMsessionflag = true;
      for (const DMsessionid of this.user.dm_session_ids) {
        this.getsessionservice.getSessions(DMsessionid)
          .subscribe(
            data => this.DMsessions.push(data),
            err => console.log(err)
          );
      }
    }

    if (this.user.session_ids === null || this.user.session_ids.length === 0 ) {
      this.Playersessionflag = false;
    } else {
      this.Playersessionflag = true;
      for (const Playersessionid of this.user.session_ids) {
        this.getsessionservice.getSessions(Playersessionid)
          .subscribe(
            data => this.playerSessions.push(data),
            err => console.log(err)
          );
      }
    }
  }

  public DMconnect(sessionID: string) {
    this.activeStatus.running = true;
    this.link = this.link.concat(sessionID.concat('/state'));
    console.log(this.link);
    this.http.patch(this.link, this.activeStatus, httpOptions)
      .subscribe(
        data => { localStorage.setItem('activeSession', JSON.stringify(data)); },
        err => {console.log(err); }
    );
  }

  public Playerconnect(sessionID: string) {

    this.getsessionservice.getSessions(sessionID).subscribe(
      data => {this.session = data[0]; },
      err => console.log(err)
    );
    if (this.session.session_state.running !== true) {
      console.log('Session is NOT active');
    } else {
            if (this.session.player_ids === undefined || this.session.player_ids.length === 0) {
              console.log('There are no players in the current session');
            } else {
                // tslint:disable-next-line:prefer-const
                for (let userID of this.session.player_ids) {
                  if (userID === this.user.identifier) {
                    console.log('Player found in session');
                    localStorage.setItem('activeSession', JSON.stringify(this.session));
                  }
                }
              }
          }
  }
}
