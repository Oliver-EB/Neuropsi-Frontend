import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigListComponent } from './config-list/config-list.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { TerapeutaListComponent } from './terapeuta-list/terapeuta-list.component';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { PruebasListComponent } from './pruebas-list/pruebas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigListComponent,
    PacientesListComponent,
    TerapeutaListComponent,
    ConsultaListComponent,
    PruebasListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'config-list', component: ConfigListComponent},
      {path: 'pacientes-list', component: PacientesListComponent},
      {path: 'terapeuta-list', component: TerapeutaListComponent},
      {path: 'consulta-list', component: ConsultaListComponent},
      {path: 'pruebas-list', component: PruebasListComponent},
      {path: '', redirectTo: '/config-list', pathMatch: 'full'},
      {path: '', redirectTo: '/pruebas-list', pathMatch: 'full'},
      {path: '', redirectTo: '/consulta-list', pathMatch: 'full'},
      {path: '', redirectTo: '/terapeuta-list', pathMatch: 'full'},
      {path: '', redirectTo: '/pacientes-list', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }