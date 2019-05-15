import { Component } from '@angular/core';
import { LookupService } from '../services/lookup.service';
import { Weapon } from '../models/Weapon';
import { Spell } from '../models/Spell';
import { Armor } from '../models/Armor';
import { Race } from '../models/Race';
import { SearchType } from '../models/SearchType';

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
  res: string;
  selectedType: string;
  selectedName: string;
  weaponActive: boolean;
  armorActive: boolean;
  spellActive: boolean;
  raceActive: boolean;

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
      this.weaponActive = true;
    } else if (this.selectedType === 'spells/') {
      this.getSpell();
      this.spellActive = true;
    } else if (this.selectedType === 'armors/') {
      this.getArmor();
      this.armorActive = true;
    } else if (this.selectedType === 'races/') {
      this.getRace();
      this.raceActive = true;
    } else {
      console.log('THATS REALLY BAD');
    }
  }

  getWeapon() {
    this.lookupService.requestWeapon(this.selectedType, this.selectedName.toLowerCase()).subscribe(
      data => { this.weapon = data[0]; console.log(data); },
      err => console.error(err),
      () => console.log('Done getting Weapon')
    );
    this.selectedType = '';
  }

  getSpell() {
    this.lookupService.requestSpell(this.selectedType, this.selectedName.toLowerCase()).subscribe(
      data => { this.spell = data[0]; console.log(data); },
      err => console.error(err),
      () => console.log('Done getting Spell')
    );
    this.selectedType = '';
  }

  getArmor() {
    this.lookupService.requestArmor(this.selectedType, this.selectedName.toLowerCase()).subscribe(
      data => { this.armor = data[0]; console.log(data); },
      err => console.error(err),
      () => console.log('Done getting Armor')
    );
    this.selectedType = '';
  }

  getRace() {
    this.lookupService.requestRace(this.selectedType, this.selectedName.toLowerCase()).subscribe(
      data => { this.race = data[0]; console.log(data); },
      err => console.error(err),
      () => console.log('Done getting Race')
    );
    this.selectedType = '';
  }

}
