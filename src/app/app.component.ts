import { Component } from '@angular/core';
import { LookupService } from './lookup.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DungeonsAndDisasters';

  public spell;

  constructor(private lookupService: LookupService) { }

  getSpell() {
    this.lookupService.getSpell().subscribe(
      data => { this.spell = data; },
      err => console.error(err),
      () => console.log('Done getting spell')
    );
  }
}
