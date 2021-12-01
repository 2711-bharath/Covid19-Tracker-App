import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryWiseComponent, PrecautionsComponent, StateWiseComponent, DonationComponent, LoginComponent, RegisterComponent } from './components';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlotViewerComponent } from './components/slot-viewer/slot-viewer.component';
import { AddSlotsComponent } from './components/admin/add-slots/add-slots.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { ViewSlotsComponent } from './components/admin/view-slots/view-slots.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CountryWiseComponent,
    StateWiseComponent,
    PrecautionsComponent,
    DonationComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SlotViewerComponent,
    AddSlotsComponent,
    AdminNavbarComponent,
    ViewSlotsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-right'
      }
    ),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
