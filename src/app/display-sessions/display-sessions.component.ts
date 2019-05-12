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
              private getsessionservice: GetsessionsService) { }

  user: User;
  DMsessionflag: boolean;
  Playersessionflag: boolean;
  playerSessions: Session[];
  DMsessions: Session[];
  session: Session;
  link: 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';
  activeStatus: SessionState = { running : false};

  ngOnInit() {
    this.user = this.getuserservice.getUser();
    if ( this.user.dm_session_ids === undefined || this.user.dm_session_ids.length === 0) {
      this.DMsessionflag = false;
    } else if (this.user.dm_session_ids === undefined || this.user.dm_session_ids.length === 0 ) {
      this.Playersessionflag = false;
    } else {
      this.DMsessionflag = true;
      this.Playersessionflag = true;
      this.DMsessions = this.getsessionservice.getSessions(this.user.dm_session_ids);
      this.playerSessions = this.getsessionservice.getSessions(this.user.session_ids);
    }
  }

  public DMconnect(sessionID: string) {
    this.activeStatus.running = true;
    this.http.patch(this.link.concat(sessionID + '/'), this.activeStatus, httpOptions)
      .subscribe(
        err => {console.log(err)}
    );
    //TODO: WRITE GOOD SESSION TO LOCALSTORAGE
  }

  public Playerconnect(sessionID: string, dmID: string) {

    this.http.get<Session>(this.link.concat(sessionID) , httpOptions)
      .subscribe(
        data => {
          this.session = data;
      },
        err => {
          console.log(err);
        }
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
            //TODO: WRITE GOOD SESSION TO LOCALSTORAGE
          }
        }
        //THIS IS FOR CONNECTING A PLAYER TO THE SESSION FOR THE FIRST TIME
        //  this.session.player_ids.push(this.user.identifier);
      }
    }
  }
}

