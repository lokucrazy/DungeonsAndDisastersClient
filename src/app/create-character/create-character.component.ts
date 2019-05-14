import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterRace, CharacterAlignment, CharacterClass, Character } from '../models/Character';
import { AlignType } from '../models/AlignType';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  basicInfoGroup: FormGroup;
  abilityGroup: FormGroup;
  selectedClass: string;
  selectedRace: string;
  selectedAlignment: string;
  alignments: AlignType[] = [
    {value: 'lawful good', viewValue: 'Lawful Good'},
    {value: 'neutral good', viewValue: 'Neutral Good'},
    {value: 'chaotic good', viewValue: 'Chaotic Good'},
    {value: 'lawful neutral', viewValue: 'Lawful Neutral'},
    {value: 'neutral', viewValue: 'Neutral'},
    {value: 'chaotic neutral', viewValue: 'Chaotic Neutral'},
    {value: 'lawful evil', viewValue: 'Lawful Evil'},
    {value: 'neutral evil', viewValue: 'Neutral Evil'},
    {value: 'chaotic evil', viewValue: 'Chaotic Evil'}
  ];
  classes: AlignType[] = [
    {value: 'barbarian', viewValue: 'Barbarian'},
    {value: 'bard', viewValue: 'Bard'},
    {value: 'cleric', viewValue: 'Cleric'},
    {value: 'druid', viewValue: 'Druid'},
    {value: 'fighter', viewValue: 'Fighter'},
    {value: 'monk', viewValue: 'Monk'},
    {value: 'paladin', viewValue: 'Paladin'},
    {value: 'ranger', viewValue: 'Ranger'},
    {value: 'rogue', viewValue: 'Rogue'},
    {value: 'sorcerer', viewValue: 'Sorcerer'},
    {value: 'warlock', viewValue: 'Warlock'},
    {value: 'wizard', viewValue: 'Wizard'}
  ];
  races: AlignType[] = [
    {value: 'dragonborn', viewValue: 'Dragonborn'},
    {value: 'dwarf', viewValue: 'Dwarf'},
    {value: 'elf', viewValue: 'Elf'},
    {value: 'gnome', viewValue: 'Gnome'},
    {value: 'half elf', viewValue: 'Half Elf'},
    {value: 'half orc', viewValue: 'Half Orc'},
    {value: 'halfling', viewValue: 'Halfling'},
    {value: 'human', viewValue: 'Human'},
    {value: 'tiefling', viewValue: 'Tiefling'}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.basicInfoGroup = this.formBuilder.group({
      nameCtrl: ['', Validators.required],
      classCtrl: ['', Validators.required],
      backgroundCtrl: ['', Validators.required],
      raceCtrl: ['', Validators.required],
      alignmentCtrl: ['', Validators.required],
      lvlCtrl: ['', Validators.required],
      xpCtrl: ['', Validators.required],
    }),
    this.abilityGroup = this.formBuilder.group({
      abilityCtrl: ['', Validators.required]
    });
  }

}
