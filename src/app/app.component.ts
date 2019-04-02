import { Component } from '@angular/core';
import { LookupService } from './lookup.service';
import { Observable, of } from 'rxjs';
import { Weapon } from './models/Weapon';
import { Spell } from './models/Spell';
import { Armor } from './models/Armor';
import { Race } from './models/Race';
import { SearchType } from './models/SearchType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DungeonsAndDisasters';

}
