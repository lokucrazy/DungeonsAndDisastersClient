import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatComponent } from './combat/combat.component';
import { SharedNotesComponent } from './shared-notes/shared-notes.component';
import { PersonalNotesComponent } from './personal-notes/personal-notes.component';
import { MapComponent } from './map/map.component';
import { LogComponent } from './log/log.component';
import { DisplaySessionsComponent } from './display-sessions/display-sessions.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { ChatComponent } from './chat/chat.component';
import { JoinComponent } from './join/join.component';
import { CreateCharacterComponent } from './create-character/create-character.component';


const routes: Routes = [
  {path: 'combat', component: CombatComponent},
  {path: 'shared-notes', component: SharedNotesComponent},
  {path: 'personal-notes', component: PersonalNotesComponent, runGuardsAndResolvers: 'always'},
  {path: 'map', component: MapComponent},
  {path: 'log', component: LogComponent},
  {path: 'display-sessions', component: DisplaySessionsComponent},
  {path: 'create-session', component: CreateSessionComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'join', component: JoinComponent},
  {path: 'create-character', component: CreateCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
