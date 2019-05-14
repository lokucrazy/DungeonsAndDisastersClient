import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DMToolbarComponent, LoginComponent, LoginDialogComponent } from './dmtoolbar/dmtoolbar.component';
import { MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CombatComponent } from './combat/combat.component';
import { SharedNotesComponent } from './shared-notes/shared-notes.component';
import { PersonalNotesComponent } from './personal-notes/personal-notes.component';
import { MapOptionsComponent } from './map-options/map-options.component';
import { MapComponent } from './map/map.component';
import { LogComponent } from './log/log.component';
import { LookupService } from './services/lookup.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { DmlookupComponent } from './dmlookup/dmlookup.component';
import { FormsModule, NgControl } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { LoginService } from './services/login.service';
import { FetchUserInfoComponent, FetchUserInfoSnackComponent } from './fetch-user-info/fetch-user-info.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GetuserService } from './services/getuser.service';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomsheetComponent, BottomSheetBoxComponent } from './bottomsheet/bottomsheet.component';
import { DisplaySessionsComponent } from './display-sessions/display-sessions.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { ChatComponent } from './chat/chat.component';
import { MatDatepickerModule,  } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { JoinComponent } from './join/join.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


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
    LoginComponent,
    LoginDialogComponent,
    FetchUserInfoComponent,
    FetchUserInfoSnackComponent,
    BottomsheetComponent,
    BottomSheetBoxComponent,
    DisplaySessionsComponent,
    CreateSessionComponent,
    ChatComponent,
    JoinComponent,
    CreateCharacterComponent
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
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatDividerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [
    LookupService,
    LoginService,
    GetuserService,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent, FetchUserInfoSnackComponent, BottomSheetBoxComponent]
})
export class AppModule { }
