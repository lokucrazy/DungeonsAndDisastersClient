import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogActions } from '@angular/material';
import { AppComponent } from '../app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateuserService } from '../services/createuser.service';
import { User } from '../models/User';
import { LoginService } from '../services/login.service';



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

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.getDropDownInfo();
  }


  public getDropDownInfo(): void {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
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

  constructor(
      public dialogRef: MatDialogRef<LoginComponent>,
      private createuserService: CreateuserService,
      private loginService: LoginService,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.newUser = {
          identifier: null,
          username : null,
          password : null,
          birthdate: null,
          notes: null,
          created_at: null,
          modified_at: null,
          characters: null,
          sessions: null};
      }

      public onNoClick(): void {
          this.dialogRef.close();
      }

      public submit(username, password, birthdate): void {
        this.newUser.username = username;
        this.newUser.password = password;
        this.newUser.birthdate = birthdate;
        console.log(username, password, birthdate);
        this.createuserService.createUser(this.newUser).subscribe(
          err => console.log(err)
        );
        this.dialogRef.close();
      }

      public loginsubmit(username, password): void {
        this.newUser.username = username;
        this.newUser.password = password;
        this.login = this.loginService.loginrequest(this.newUser);
        if (this.login) {
          console.log('Login Successful');
        } else {
          console.log('Login failed.');
        }
        this.dialogRef.close();
      }
}
