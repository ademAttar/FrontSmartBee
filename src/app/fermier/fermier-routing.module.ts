import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from '../sign-in/sign-in.component';
import {CreerFermeComponent} from './creer-ferme/creer-ferme.component';
import {DashboardFermierComponent} from './dashboard-fermier/dashboard-fermier.component';
import {MesFermesComponent} from './mes-fermes/mes-fermes.component';

const routes: Routes = [
  {path: '', component: DashboardFermierComponent},
  {path: 'dashboard', component: DashboardFermierComponent},
  {path: 'fermes', component: MesFermesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FermierRoutingModule { }
