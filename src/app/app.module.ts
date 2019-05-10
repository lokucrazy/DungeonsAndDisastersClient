import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DMToolbarComponent } from './dmtoolbar/dmtoolbar.component';
import { MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CombatComponent } from './combat/combat.component';
import { SharedNotesComponent } from './shared-notes/shared-notes.component';
import { PersonalNotesComponent } from './personal-notes/personal-notes.component';
import { MapOptionsComponent } from './map-options/map-options.component';
import { MapComponent } from './map/map.component';
import { LogComponent } from './log/log.component';
import { LookupService } from './lookup.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { DmlookupComponent } from './dmlookup/dmlookup.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    DMToolbarComponent,
    CombatComponent,
    SharedNotesComponent,
    PersonalNotesComponent,
    MapOptionsComponent,
    MapComponent,
    LogComponent,
    DmlookupComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
