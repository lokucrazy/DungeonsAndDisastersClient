
import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { LoginService } from './services/login.service';
import { LookupService } from './services/lookup.service';
import { Observable, of } from 'rxjs';
import { Weapon } from './models/Weapon';
import { Spell } from './models/Spell';
import { Armor } from './models/Armor';
import { Race } from './models/Race';
import { SearchType } from './models/SearchType';
import { Button } from 'protractor';
import { style } from '@angular/animations';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { GetuserService } from './services/getuser.service';
import { userInfo } from 'os';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DungeonsAndDisasters';
  public currentUser: User;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    console.log('Give up.');
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  message:string;
  sendMsg(message:string) {
      this.message = message;
    }
  }

