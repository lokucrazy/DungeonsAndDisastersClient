import { Component } from '@angular/core';
import { LookupService } from './lookup.service';
import { Observable, of } from 'rxjs';
import { Weapon } from './models/Weapon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DungeonsAndDisasters';

  weapon: Weapon;

  constructor(private lookupService: LookupService) { }

  getWeapon() {
    this.lookupService.getWeapon().subscribe(
      data => { this.weapon = data[0]; console.log(data);},
      err => console.error(err),
      () => console.log('Done getting Weapon')
    );
  }
}
