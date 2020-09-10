import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxSpinnersModule} from 'ngx-spinners';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';
import { HidesubmenuDirective } from '../header/hidesubmenu.directive';
import { CalenderComponent } from '../calender/calender.component';
// import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { SidewindowComponent } from '../../common/sidewindow/sidewindow.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DynamicComponentDirective } from '../sidewindow/dynamic-component.directive';
import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';
import { GridsterModule } from 'angular-gridster2';
import { DashboardModule } from 'src/app/views/dashboard/dashboard.module';
//import { WidgetComponent } from 'src/app/views/dashboard/widget/widget.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { HierarchyModalComponent } from '../../hierarchy-modal/hierarchy-modal.component';
// import { SpinnerComponent } from '../../spinner/spinner.component';
// import { OrgchartModule } from '@dabeng/ng-orgchart';
@NgModule({
  declarations: [
    MainComponent,
    // HeaderComponent,
    // FooterComponent,
    // MainComponent,
    HidesubmenuDirective,
    SidewindowComponent,
    CalenderComponent,
    // NavMenuComponent,
    // DashboardComponent,
    // WidgetComponent,
    DynamicComponentDirective,
    // HierarchyModalComponent,
    // SpinnerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    NgxSpinnersModule,
    DragDropModule,
    // OrgchartModule,
    DashboardModule,
  ]
})
export class MainModule { }
