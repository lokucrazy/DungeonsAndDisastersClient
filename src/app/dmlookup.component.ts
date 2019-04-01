import { Component, OnInit } from '@angular/core';
import { LookupService } from './lookup.service';
import { Observable, of } from 'rxjs';
import { Weapon } from './models/Weapon';
import { Spell } from './models/Spell';
import { Armor } from './models/Armor';
import { Race } from './models/Race';
import { SearchType } from './models/SearchType';

@Component({
  selector: 'app-dmlookup',
  templateUrl: './dmlookup.component.html',
  styleUrls: ['./dmlookup.component.css']
})
export class DmlookupComponent {

  weapon: Weapon;
  spell: Spell;
  armor: Armor;
  race: Race;
  selectedType: string;
  selectedName: string;

  searchtypes: SearchType[] = [
    {value: 'spells/', viewValue: 'Spells'},
    {value: 'weapons/', viewValue: 'Weapons'},
    {value: 'armors/', viewValue: 'Armor'},
    {value: 'races/', viewValue: 'Races'}
];

  getValues(title: string) {
    this.selectedName = title;
  }

  constructor(private lookupService: LookupService) { }

  datafunctionSwitcher() {
    if (this.selectedType === 'weapons/') {
      this.getWeapon();
    } else if (this.selectedType === 'spells/') {
      this.getSpell();
    } else if (this.selectedType === 'armors/') {
      this.getArmor();
    } else if (this.selectedType === 'races/') {
      this.getRace();
    } else {
      console.log('THATS REALLY BAD');
    }
  }

  getWeapon() {
    this.lookupService.requestWeapon(this.selectedType, this.selectedName).subscribe(
      data => { this.weapon = data[0]; console.log(data); },
      err => console.error(err),
      () => console.log('Done getting Weapon')
    );
    this.selectedType = '';
  }

  getSpell() {
    this.lookupService.requestSpell(this.selectedType, this.selectedName).subscribe(
      data => { this.spell = data[0]; console.log(data); },
      err => console.error(err),
      () => console.log('Done getting Spell')
    );
    this.selectedType = '';
  }

  getArmor() {
    this.lookupService.requestArmor(this.selectedType, this.selectedName).subscribe(
      data => { this.armor = data[0]; console.log(data); },
      err => console.error(err),
      () => console.log('Done getting Armor')
    );
    this.selectedType = '';
  }

  getRace() {
    this.lookupService.requestRace(this.selectedType, this.selectedName).subscribe(
      data => { this.race = data[0]; console.log(data); },
      err => console.error(err),
      () => console.log('Done getting Race')
    );
    this.selectedType = '';
  }

}
