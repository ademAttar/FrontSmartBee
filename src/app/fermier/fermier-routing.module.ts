import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from '../sign-in/sign-in.component';
import {CreerFermeComponent} from './creer-ferme/creer-ferme.component';
import {DashboardFermierComponent} from './dashboard-fermier/dashboard-fermier.component';

const routes: Routes = [
  {path: '', component: DashboardFermierComponent},
  {path: 'dashboard', component: DashboardFermierComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FermierRoutingModule { }
