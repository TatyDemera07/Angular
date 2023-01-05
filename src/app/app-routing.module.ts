import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [

  //AUTH
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},

  {path: '', redirectTo:'/dashboard/',pathMatch:'full'},
  {path: '**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
