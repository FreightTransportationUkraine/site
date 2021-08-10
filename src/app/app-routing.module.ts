import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {DriverCargoComponent} from './driver-cargo/driver-cargo.component';
import {OwnerCargoComponent} from './owner-cargo/owner-cargo.component';
import {ContactsComponent} from './contacts/contacts.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'drivers', component: DriverCargoComponent },
  { path: 'owners', component: OwnerCargoComponent },
  { path: 'contacts', component: ContactsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
