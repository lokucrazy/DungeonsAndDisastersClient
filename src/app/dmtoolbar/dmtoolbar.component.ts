import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateuserService } from '../services/createuser.service';
import { User } from '../models/User';
import { LoginService } from '../services/login.service';
import { GetuserService } from '../services/getuser.service';
import { Session } from '../models/Session';

export interface DialogData {
  username: string;
  password: string;
  birthday: string;
}

@Component({
  selector: 'app-dmtoolbar',
  templateUrl: './dmtoolbar.component.html',
  styleUrls: ['./dmtoolbar.component.css']
})
export class DMToolbarComponent implements OnInit {

  currentUser: User;
  currentSession: Session;
  dmFlag: boolean;

  constructor(
      private getUserService: GetuserService
    ) {}

  ngOnInit() {
    this.currentUser = this.getUserService.getUser();
    this.currentSession = JSON.parse(localStorage.getItem('activeSession'));
  }

  refresh() {
    this.currentUser = this.getUserService.getUser();
    this.currentSession = JSON.parse(localStorage.getItem('activeSession'));
    this.ifDM();
  }

  ifDM() {
    if (!this.currentSession || !this.currentUser){
      this.dmFlag = false;
    } else if(this.currentSession.dm_id != this.currentUser.identifier){
      this.dmFlag = false;
    } else{
      this.dmFlag = true;
    }
  }


  public logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('activeSession');
    localStorage.removeItem('grabSession');
    this.currentUser = null;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
})
export class LoginComponent {
  username: string;
  password: string;
  birthday: string;

  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
// tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(LoginDialogComponent, {
          width: '500px',
          data: {username: this.username, password: this.password, birthday: this.birthday}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog was closed');
          this.username = result;
      });
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.html'
})
export class LoginDialogComponent {

  newUser: User;
  login: boolean;

  birfday: Date = new Date();
  currentUser: User;


  constructor(
      public dialogRef: MatDialogRef<LoginComponent>,
      private createuserService: CreateuserService,
      private loginService: LoginService,
      private getUserService: GetuserService,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.newUser = {
          identifier: null,
          username : null,
          password : null,
          birthdate: null,
          notes: null,
          created_at: null,
          modified_at: null,
          character_ids: null,
          session_ids: null,
          dm_session_ids: null,
          npc_ids: null
        };
      }

      public onNoClick(): void {
          this.dialogRef.close();
      }


      public submit(username, password): void {
        this.newUser.birthdate = new Date();
        this.newUser.username = username;
        this.newUser.password = password;
        this.newUser.birthdate = this.birfday;
        console.log(username, password, this.newUser.birthdate);
        this.createuserService.createUser(this.newUser).subscribe(
          data => localStorage.setItem('currentUser', JSON.stringify(data)),

          err => console.log(err)
        );
        this.currentUser = this.getUserService.getUser();
        this.dialogRef.close();
      }

      public loginsubmit(username, password): void {
        this.newUser.username = username;
        this.newUser.password = password;

        this.loginService.loginrequest(this.newUser).subscribe(
          data => localStorage.setItem('currentUser', JSON.stringify(data)),
          err => console.log(err)
        );
        this.currentUser = this.getUserService.getUser();
        this.dialogRef.close();
      }

}
