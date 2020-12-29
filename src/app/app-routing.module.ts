import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NotLoginGuard } from './guards/not-login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [NotLoginGuard],
  },
  {
    path: 'home',
    loadChildren: () => import(`./views/home-page/home-page.module`).then(module => module.HomePageModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
