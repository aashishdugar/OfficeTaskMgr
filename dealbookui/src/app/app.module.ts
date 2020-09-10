import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NgxSpinnersModule} from 'ngx-spinners';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { InterceptorsService } from './services/interceptors.service';
// import { DatePipe } from './common/customepipes/date.pipe';
// import { Ng2SearchPipeModule } from 'ng2-search-filter'
// import { NgxOrgChartModule } from 'ngx-org-chart';
//import { OrgchartModule } from '@dabeng/ng-orgchart';
// Firebase services + enviorment module
import { SidewindowComponent } from '../app/common/sidewindow/sidewindow.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { OrgchartModule } from '@dabeng/ng-orgchart';
import { environment } from '../environments/environment';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import {FormsModule} from "@angular/forms";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ColumnListComponent } from './common/column-list/column-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicComponentDirective } from './common/sidewindow/dynamic-component.directive';
import { HierarchyComponent } from '../app/views/contacts/hierarchy/hierarchy.component'

//import { HierarchyListComponent } from './app/views/contacts/hierarchy/hierarchy-list/hierarchy-list.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
// import { WidgetComponent } from './app/views/dashboard/widget/widget.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { WidgetsComponent } from './common/widgets/widgets.component';
import {DatePipe} from '@angular/common';
import { FetchServerDataProvider } from './providers/fetchserverdata';
import { Utils } from './providers/utils';

import { HeaderComponent } from '../app/common/header/header.component';
import { FooterComponent } from '../app/common/footer/footer.component';
import { NavMenuComponent } from '../app/common/nav-menu/nav-menu.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { HierarchyModalComponent } from '../../src/app/hierarchy-modal/hierarchy-modal.component';
import { SpinnerComponent } from '../../src/app/spinner/spinner.component';
import { OrgchartModule } from '@dabeng/ng-orgchart';
//import { DashboardComponent } from './views/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ColumnListComponent,
    HierarchyComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    SpinnerComponent,
    HierarchyModalComponent,
    SidewindowComponent
    //DashboardComponent
   // HierarchyListComponent,
    // WidgetComponent,

  ],
  imports: [
  BrowserModule,
    // CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DragDropModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      // progressBar:true,
      // progressAnimation: 'increasing',
      preventDuplicates: true,
    }),
    // Ng2SearchPipeModule,
    // NgxOrgChartModule,
    OrgchartModule,
    FormsModule,
    ScrollingModule,
    ScrollDispatchModule
  ],
  providers: [DatePipe,
    
    HierarchyModalComponent,
    FetchServerDataProvider,
    Utils,
    SidewindowComponent,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorsService,
    //   multi: true
    // }
  ],
  entryComponents:[ColumnListComponent,HierarchyComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
