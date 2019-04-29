import { Component, OnInit } from '@angular/core';
import { LookupService } from './services/lookup.service';
import { Observable, of } from 'rxjs';
import { Weapon } from './models/Weapon';
import { Spell } from './models/Spell';
import { Armor } from './models/Armor';
import { Race } from './models/Race';
import { SearchType } from './models/SearchType';
import { LoginComponent, LoginDialogComponent } from './dmtoolbar/dmtoolbar.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DungeonsAndDisasters';
  currentUser: boolean;
  ngOnInit() {
    console.log('How can one person be so incompetent');
  }
}
