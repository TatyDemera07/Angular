import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NavLeftComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NavLeftComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule { };
