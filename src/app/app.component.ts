
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
import { MESSAGES_CONTAINER_ID } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DungeonsAndDisasters';
  currentUser: User;


  constructor() {}


  ngOnInit() {
    console.log('Give up.');
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  messages = [];
  i:number = 0;
  sendMsg(message:string) {
    console.log(message);
    this.messages[this.i] = message;
    console.log(this.messages[this.i]);
    console.log(this.currentUser.username)
    document.getElementById("chat-show").insertAdjacentText("beforebegin", this.messages[this.i]);
    document.getElementById("chat-show").insertAdjacentHTML("beforebegin", "<div></div>");
    this.i++;
  }
  
}

