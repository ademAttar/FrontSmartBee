import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from '../sign-in/sign-in.component';
import {CreerFermeComponent} from './creer-ferme/creer-ferme.component';

const routes: Routes = [
  {path: '', component: CreerFermeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FermierRoutingModule { }
