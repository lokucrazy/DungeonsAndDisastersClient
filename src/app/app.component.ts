
import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { LoginService } from './services/login.service';
import { Component } from '@angular/core';
import { LookupService } from './lookup.service';
import { Observable, of } from 'rxjs';
import { Weapon } from './models/Weapon';
import { Spell } from './models/Spell';
import { Armor } from './models/Armor';
import { Race } from './models/Race';
import { SearchType } from './models/SearchType';
import { Button } from 'protractor';
import { style } from '@angular/animations';
import { AstMemoryEfficientTransformer } from '@angular/compiler';


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

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

}
