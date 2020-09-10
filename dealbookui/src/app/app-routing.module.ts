import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './common/main/main.component';
// import { DashboardComponent } from './views/dashboard/dashboard.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import {ForgotpasswordComponent} from "./views/forgotpassword/forgotpassword.component";
import {ChangepasswordComponent} from "./views/changepassword/changepassword.component";



const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  // { path: 'contacts', component: ContactsComponent },
  //  { path: 'db', loadChildren: () => import('./common/main/main.module').then(mod => mod.MainModule), canActivate:[AuthGuard]},
  { path: 'forgot', component: ForgotpasswordComponent },
  { path: 'reset', component: ChangepasswordComponent },
  //{ path: '**', redirectTo: '/db' },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./views/contacts/contacts.module').then(m => m.ContactsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
