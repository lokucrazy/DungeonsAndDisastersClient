import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatComponent } from './combat/combat.component';
import { SharedNotesComponent } from './shared-notes/shared-notes.component';
import { PersonalNotesComponent } from './personal-notes/personal-notes.component';
import { MapComponent } from './map/map.component';
import { LogComponent } from './log/log.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'combat', component: CombatComponent},
  {path: 'shared-notes', component: SharedNotesComponent},
  {path: 'personal-notes', component: PersonalNotesComponent},
  {path: 'map', component: MapComponent},
  {path: 'log', component: LogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
