import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FermierRoutingModule } from './fermier-routing.module';
import { CreerFermeComponent } from './creer-ferme/creer-ferme.component';
import { ListeFermesComponent } from './liste-fermes/liste-fermes.component';


@NgModule({
  declarations: [
    CreerFermeComponent,
    ListeFermesComponent
  ],
  imports: [
    CommonModule,
    FermierRoutingModule
  ]
})
export class FermierModule { }
