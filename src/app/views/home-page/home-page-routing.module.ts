import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { LoginGuard } from '../../guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
