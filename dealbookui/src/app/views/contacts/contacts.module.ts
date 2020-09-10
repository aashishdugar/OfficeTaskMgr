import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { ScrollingModule } from '@angular/cdk/scrolling';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from '../contacts/contacts.component';
import { FilterContactsPipe } from './filter-contacts.pipe';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DatePipe } from '../../common/customepipes/date.pipe';

import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { HierarchyListComponent } from './hierarchy/hierarchy-list/hierarchy-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TextSearchFilterPipe } from './text-search-filter.pipe';
import { EditContcatComponent } from './edit-contcat/edit-contcat.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component'
//import { HierarchyModalComponent } from '../../hierarchy-modal/hierarchy-modal.component';
//import { PtsGenericFunctions } from 'src/app/providers/ptsGenericFunctions';
@NgModule({
  declarations: [
    ContactsComponent,
    DatePipe,
    FilterContactsPipe,
     AddContactComponent, 
  
    //  HierarchyComponent, 
    //  HierarchyListComponent, 
  
    ContactViewComponent,
    ContactCardComponent,
    ActivitiesComponent,
    AddActivityComponent,
    TextSearchFilterPipe,
    EditContcatComponent,
    EditActivityComponent,
    //HierarchyModalComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   ScrollingModule,
    BsDatepickerModule.forRoot(),
    // Ng2SearchPipeModule,
   // PtsGenericFunctions
  ]
})
export class ContactsModule { }
