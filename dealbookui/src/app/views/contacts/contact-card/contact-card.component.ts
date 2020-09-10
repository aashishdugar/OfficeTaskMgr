import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ContactsService,Contact } from '../../../services/contacts.service';
import { HierarchyComponent } from '../../../views/contacts/hierarchy/hierarchy.component';
import { EventEmitterService } from '../../../services/event-emitter.service';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { Utils } from '../../../providers/utils';
import {DatePipe} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ContactsComponent }from '../contacts.component'
import { SidewindowComponent } from '../../../common/sidewindow/sidewindow.component';
declare var jquery: any;
declare var $: any;
import {HierarchyModalComponent } from '../../../hierarchy-modal/hierarchy-modal.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Output() openWindow = new EventEmitter<any>();
  @Output() selectedRow = new EventEmitter<any>();
  @Output() scrollToTop = new EventEmitter<any>();
  constructor(public sidewindowcomponent:SidewindowComponent,public contactsComponent:ContactsComponent,private hierarchyModalComponent:HierarchyModalComponent,private toastr:ToastrService,private utils:Utils,private serviceCallProvider:FetchServerDataProvider,private datePipe: DatePipe,private emService:EventEmitterService,private contactService: ContactsService,) { }
  @Input() index;
  @Input() isFirst;
  @Input() set isTrue(val) {
  };
  model;

  @Input() contacts: string;
  @Input() contact: Contact;
  selectedIndex = null;
  curHierarchy = false;
  date = ["createdOn", "updatedOn", "date", "fallowUp"];
  selected = false;
  
  @Input() set selectedHierarchy(v){
    this.curHierarchy = false;
    if(v == this.index){
      this.curHierarchy = true;
    }
  };
  ngOnInit(): void {
  
    if(this.contact['isMaximize'] != undefined && this.contact['isMaximize'] == true){
      this.selectedIndex = this.contact.id;
    }
    this.emService.sideWindow.subscribe(v=> {
      if(!v.isTrue){
        this.selected = false;
        this.curHierarchy = false;
      }
    })
    this.emService.openrow.subscribe(v=> {
      this.selected = false;
      this.selectedIndex = null;
      if(this.contact && this.contact.id == v) {
        this.selectedIndex = v;
      };

    });
    this.emService.updateContact.subscribe(data => {
      if(null != data && this.contact.id == data.id){
        let tempContact={
          id: data.id,
          email: data.email,
          mobile: data.mobile,
          designation: data.designation,
          contactowner: data.contactowner,
          lastactivitydate: data.lastactivitydate,
          creationdate: data.createdOn,
          location:data.location,
          contactOrg:{
            id:null == data.contactOrg? "": data.contactOrg.id,
            name:null == data.contactOrg? "": data.contactOrg.name,
        
          },
          role:{
            id:null == data.role? "": data.role.id,
            name:null == data.role? "": data.role.name,
          },
          contactType:{
            id:null == data.contactType? "": data.contactType.id,
            name:null == data.contactType? "": data.contactType.name,
          },
          reportingto:{
            id:null == data.reportingto? "": data.reportingto.id,
            name:null == data.reportingto? "": data.reportingto.name,
          },
          contactOwner:{
            id:null == data.contactOwner? "": data.contactOwner.id,
            name:null == data.contactOwner? "": data.contactOwner.name,
            email:null == data.contactOwner? "": data.contactOwner.email,
          },
          address:{
            id:null == data.address? "": data.address.id,
            line: null == data.address? "": data.address.line,
            city: null == data.address? "": data.address.city,
            zipCode: null == data.address? "": data.address.zipCode,
            state:  null == data.address? "": null == data.address.state? "":data.address.state 
          },
        
          isuser: data.isUser,
          name: data.name,
          activities: data.activities
        };
        
       
   

        if(null != data.name && data.name.length > 0 ){
          this.contact.name = data.name;
        }
        if(null != data.email && data.email.length > 0 ){
          this.contact.email = data.email;
        }
        if(null != data.mobile && data.mobile.length > 0 ){
          this.contact["mobile"] = data.mobile;

        }
        if(null != data.designation && data.designation.length > 0 ){
          this.contact["designation"] = data.designation;
        }
        if(null != data.isUser && data.isUser.length > 0 ){
          this.contact["isUser"] = data.isUser;
        }

        if(null != data.contactorg ){
          this.contact["contactOrg"]=tempContact.contactOrg;
        }

        if(null != data.contactType ){
          this.contact["contactOrg"]=tempContact.contactType;
        }
        if(null != data.reportingto ){
          this.contact["reportingto"]=tempContact.reportingto;
        }
        if(null != data.contactOwner ){
          this.contact["contactOwner"]=tempContact.contactOwner;
        }
        if(null != data.role ){
          this.contact["role"]=tempContact.role;
        }
        if(null != data.location ){
          this.contact["location"]=tempContact.location;
        }
      }
    });
    
    this.model = this.contactService.displayColumns;
  }

  moveArrayItemToNewIndex(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return [...arr]; 
  };

  showDetails(id,contact){
    if(!this.selectedIndex){
      this.selectedIndex = id;
    }else{
      this.selectedIndex = null;
    }
  }
  showWindow(){
    this.openWindow.emit();
  }
  addNote(contact, event) {
    event.stopPropagation();
  }

  deleteContact(contact, event) {

    let id= contact.id;
    this.contactsComponent.deleteContacts(id);

  }

  hierarchyPanel(contact, $event) {
    this.emService.setIsHierarchyOpen(true);
    this.selectedHierarchy = contact.id;
    this.contactService.getHierarchyFlag(true);
    this.contactService.contacts.subscribe(()=>{
      if(this.emService.getIsHierarchyOpen()){
        this.updateChart(contact);
      }
    })
    this.emService.updateActivity.subscribe(()=>{
      if(this.emService.getIsHierarchyOpen()){
        this.updateChart(contact);
      }
    })
        let contactId = contact.id
    let contactName = contact.name
    this.sidewindowcomponent.getAllDataHierarchy(contactId,contactName)
    this.emService.showHideWindow(true, HierarchyComponent, `${contact.name} - Hierarchy`);
    //$event.stopPropagation();
  }
  updateChart(contact) {
    let lowLevel = this.contactService.getContacts().filter(c=>{
      return c['reportto'] && c['reportto'].id == contact.id;
    })
    let sameLevel =this.contactService.getContacts().filter(c=>{
      return contact.reportto && c['reportto'] && c['reportto'].id == contact.reportto.id || (!contact.reportto && contact.id == c.id);
    }).map(c=> {
      if(contact.id == c.id && lowLevel.length > 0) {
        c['children'] = lowLevel;
      }
      return c;
    })
    let topLevel =this.contactService.getContacts().filter(c=>{
      return contact.reportto && c.id == contact.reportto.id;
    })
    topLevel.length > 0 ? topLevel[0]['children'] = sameLevel: topLevel = sameLevel;
    this.contactService.setHierarchyList(topLevel);
    this.contactService.setcontactId(contact.id);
    setTimeout(()=>{
      this.emService.showHideWindow(true, HierarchyComponent, `${contact.name} - Hierarchy`);
    }, 200)
    this.selectedRow.emit(this.index);
  }
  addActivity(saveActivety) {
    // this.contact.activities.unshift(saveActivety)
  
  }

  renderDate(date, key) {
    if(key == "fallowUp" && date) {
      date = date.fallowUpDate;
    }
    if(null != key && undefined != key && (key == "updatedOn" || key == "createdOn")){
      return this.datePipe.transform(date, 'dd MMM y, h:mm a');
    }else{
      return date ? new Date(date).toDateString() : "";
    }
    
  }
  renderValue(data) {
    if(data && typeof data === 'object') {
      return data.name;
    }
    return data && data.replace(/  /g, " ");
  }
}
