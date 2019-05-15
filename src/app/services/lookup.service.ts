import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weapon } from '../models/Weapon';
import { Spell } from '../models/Spell';
import { Armor } from '../models/Armor';
import { Race } from '../models/Race';


@Injectable()
export class LookupService {

    x: string;
    y: string;
    link = 'http://ec2-18-232-96-251.compute-1.amazonaws.com:8080/get/';
    request: string;

    constructor(private http: HttpClient) {}

    requestWeapon(x, y): Observable <Weapon[]> {
        console.log(x);
        console.log(y);
        this.request = this.link.concat(x.concat(y));
        return this.http.get<Weapon[]>(this.request);
    }

    requestSpell(x, y): Observable <Spell[]> {
        console.log(x);
        console.log(y);
        this.request = this.link.concat(x.concat(y));
        return this.http.get<Spell[]>(this.request);
    }

    requestArmor(x, y): Observable <Armor[]> {
        console.log(x);
        console.log(y);
        this.request = this.link.concat(x.concat(y));
        return this.http.get<Armor[]>(this.request);
    }

    requestRace(x, y): Observable <Race[]> {
        console.log(x);
        console.log(y);
        this.request = this.link.concat(x.concat(y));
        return this.http.get<Race[]>(this.request);
    }
}
