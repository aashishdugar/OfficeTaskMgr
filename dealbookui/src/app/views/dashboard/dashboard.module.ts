import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GridsterModule } from 'angular-gridster2';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { WidgetsComponent } from '../../common/widgets/widgets.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
 import { DuplicateCheckPipe } from './duplicate-check.pipe';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    GridsterModule,
    DragDropModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [ DashboardComponent, WidgetsComponent,DuplicateCheckPipe],
  exports:[MatTableModule,MatSortModule]
})
export class DashboardModule { }
