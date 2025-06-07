import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FermierRoutingModule } from './fermier-routing.module';
import { CreerFermeComponent } from './creer-ferme/creer-ferme.component';
import { ListeFermesComponent } from './liste-fermes/liste-fermes.component';
import { DashboardFermierComponent } from './dashboard-fermier/dashboard-fermier.component';
import { FermierHeaderComponent } from './fermier-header/fermier-header.component';
import { MesFermesComponent } from './mes-fermes/mes-fermes.component';


@NgModule({
  declarations: [
    CreerFermeComponent,
    ListeFermesComponent,
    DashboardFermierComponent,
    FermierHeaderComponent,
    MesFermesComponent
  ],
  imports: [
    CommonModule,
    FermierRoutingModule
  ]
})
export class FermierModule { }
