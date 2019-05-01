import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DungeonsAndDisasters';
  currentUser: User;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    console.log('Give up.');
  }

}
