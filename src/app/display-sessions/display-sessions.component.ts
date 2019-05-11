import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../services/getuser.service';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetsessionsService } from '../services/getsessions.service';
import { Session } from '../models/Session';

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

  public connect(sessionID: string){
    console.log(sessionID);
  }
}
