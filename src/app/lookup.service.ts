import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LookupService {

    constructor(private http: HttpClient) {}

    getSpell() {
        return this.http.get('http://ec2-18-232-96-251.compute-1.amazonaws.com:8080/get/weapons/quarterstaff');
    }
}
