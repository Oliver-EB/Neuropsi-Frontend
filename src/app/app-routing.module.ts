import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const ROUTES: Routes = [
 { path: '', component:HomeComponent},
 { path: 'dashboard', component:DashboardComponent},
 { path: 'login', component:LoginComponent},
 { path: 'register', component:RegisterComponent},
 { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
