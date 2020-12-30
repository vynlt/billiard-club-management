import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { PaymentPanelComponent } from '../../components/payment-panel/payment-panel.component';
import { HomePageRoutingModule } from './home-page-routing.module';

import { HoverClassDirective } from '../../directives/hover-class.directive';

@NgModule({
  declarations: [HomePageComponent, NavigationBarComponent, PaymentPanelComponent, HoverClassDirective],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
