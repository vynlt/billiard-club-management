import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { HomePageRoutingModule } from './home-page-routing.module';


@NgModule({
  declarations: [HomePageComponent, NavigationBarComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
