import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryWiseComponent, PrecautionsComponent, StateWiseComponent, DonationComponent, LoginComponent, RegisterComponent, SlotViewerComponent, AddSlotsComponent, AdminNavbarComponent, ViewSlotsComponent } from './components';
import { AuthGuard, NavGuard } from './shared';

const routes: Routes = [
  { path: '', redirectTo: 'state-wise', pathMatch: 'full' },
  { path: 'slots', component: SlotViewerComponent },
  { path: 'country-wise', component: CountryWiseComponent },
  { path: 'precautions', component: PrecautionsComponent },
  { path: 'state-wise', component: StateWiseComponent },
  { path: 'donate', component: DonationComponent },
  { path: 'login', component: LoginComponent, canActivate: [NavGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NavGuard] },
  { path: 'admin', component:AdminNavbarComponent ,children: [
    { path: '', redirectTo: 'add-slots', pathMatch: 'full' },
    { path: 'add-slots', component: AddSlotsComponent },
    { path: 'view-slots', component: ViewSlotsComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
