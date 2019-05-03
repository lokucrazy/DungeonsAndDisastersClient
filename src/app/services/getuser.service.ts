import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  constructor() { }

  getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
