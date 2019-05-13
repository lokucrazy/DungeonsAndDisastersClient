import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { GetuserService } from '../services/getuser.service';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetsessionsService } from '../services/getsessions.service';
import { Session } from '../models/Session';
import { SessionState } from '../models/SessionState';

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

               }

  user: User;
  DMsessionflag = false;
  Playersessionflag = false;
  playerSessions: Session[] = [];
  DMsessions: Session[] = [];
  session: Session = null;
  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';
  activeStatus: SessionState = { running : undefined};
  turbolink: string;
  currentSession: Session;
  asyncResult: any;

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

  public DMdisconnect(sessionID: string) {
    this.activeStatus.running = false;
    this.link = this.link.concat(sessionID.concat('/state'));
    console.log(this.link);
    this.http.patch(this.link, this.activeStatus, httpOptions)
      .subscribe(
        err => console.log(err)
    );
    localStorage.removeItem('activeSession');
  }

  public async Playerconnect(sessionID: string) {
    await this.getsessionservice.getSessions(sessionID).toPromise()
      .then(
        data => { this.session = data; },
        err => console.log(err)
      )
      .then(
        () => this.checkSession(this.session)
      );
  }

  public checkSession(session: Session) {
    if (session === null) {
      console.log('Session is null');
    } else {
    if (session.session_state !== true) {
      console.log('Session is NOT active');
    } else {
            if (session.player_ids === null) {
              console.log('The session does not exist');
            } else if (session.player_ids.length === 0) {
              console.log('There are no players in the current session');
            } else {
                for (const userID of session.player_ids) {
                  if (userID === this.user.identifier) {
                    console.log('Player found in session');
                    localStorage.setItem('activeSession', JSON.stringify(this.session));
                  }
                }
              }
          }
      }
  }
}
