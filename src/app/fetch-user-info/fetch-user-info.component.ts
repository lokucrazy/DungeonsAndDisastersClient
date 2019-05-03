import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-fetch-user-info',
  templateUrl: './fetch-user-info.component.html',
  styleUrls: ['./fetch-user-info.component.css']
})
export class FetchUserInfoComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openUserSnackBar() {
    this.snackBar.openFromComponent(FetchUserInfoSnackComponent, {
      duration: 5000,
    });
  }
}


@Component({
  selector: 'app-fetch-user-info-snack',
  templateUrl: './fetch-user-info-snack.html'
})
export class FetchUserInfoSnackComponent {
  user = JSON.parse(localStorage.getItem('currentUser'));
}
