import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  {path: "", component: MainComponent,
    children : [
      {path: "", redirectTo:'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('../../views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {path:'contacts', loadChildren: () => import('../../views/contacts/contacts.module').then(mod => mod.ContactsModule)},
      // {path:'reports', loadChildren: () => import('../../components/reports/reports.module').then(mod => mod.ReportsModule)}
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
