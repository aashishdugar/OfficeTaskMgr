import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import {ForgotpasswordComponent} from "./views/forgotpassword/forgotpassword.component";
import {ChangepasswordComponent} from "./views/changepassword/changepassword.component";
export const routes: Routes = [
  // {
  //   path: 'das',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'db', loadChildren: () => import('./common/main/main.module').then(mod => mod.MainModule), canActivate:[AuthGuard]},
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'forgot',
    component: ForgotpasswordComponent,
    // pathMatch: 'full',
    data: {
      title: 'Forgot Password'
    }
  },
  {
    path: 'reset',
    component: ChangepasswordComponent,
    // pathMatch: 'full',
    data: {
      title: 'Reset Password'
    }
  },
 
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      
      {
        path: 'contacts',
        loadChildren: () => import('./views/contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
      
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
