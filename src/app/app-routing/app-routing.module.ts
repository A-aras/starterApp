import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [

  { path: 'Home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
