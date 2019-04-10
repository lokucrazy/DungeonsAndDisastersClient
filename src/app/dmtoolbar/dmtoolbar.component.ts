import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogActions } from '@angular/material';
import { AppComponent } from '../app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateuserService } from '../createuser.service';
import { User } from '../models/User';



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

  constructor() {}

  ngOnInit() {
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

  constructor(
      public dialogRef: MatDialogRef<LoginComponent>,
      private createuserService: CreateuserService,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

      public onNoClick(): void {
          this.dialogRef.close();
      }

      public submit(x, y, z): void {
        this.newUser.username = x;
        this.newUser.password = y;
        this.newUser.birthday = z;
        this.createuserService.createUser(this.newUser).subscribe();
      }


}
