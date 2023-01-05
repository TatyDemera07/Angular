import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: '', component:AuthComponent,
  children:[
  //AUTH
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
] },
  //{path: '', redirectTo:'/dashboard/',pathMatch:'full'},
  //{path: '**', component:NotFoundComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthRoutingModule { }
