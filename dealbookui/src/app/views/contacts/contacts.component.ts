import { Component, OnInit, Renderer2, HostListener, OnDestroy, ViewChild, ElementRef, Input, ViewContainerRef, ViewChildren, QueryList  } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';
import { ContactsService,Contact  } from '../../services/contacts.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ContactsModel } from '../../model/contacts.model';
import { FetchServerDataProvider } from '../../providers/fetchserverdata';
import { Utils } from '../../providers/utils';
import { ContactViewComponent } from '../../views/contacts/contact-view/contact-view.component';
import { ColumnListComponent } from 'src/app/common/column-list/column-list.component';
import {DatePipe} from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { ToastrService } from 'ngx-toastr';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport,{static:false}) viewPort: CdkVirtualScrollViewport;

  term: any = "";
  contacts;
  list;
  model; 
  tableColumns:any;
  order: string = '';
  assending= true;
  activeColum:string = "";
  searchText:string=null;
  startX;
  startWidth;
  resizableMousemove;
  resizableMouseup;
  pressed;
  isFirst = true;
  isTrue = false;
  selectedHierarchy;
  loggedInUserEmail;
  selectedRowIndex = null;
  contactArray:any = []
  mySubscription: any;
  serverUrl:any = '';
  labelTitle:any = '';
  currentContactList:any = [];
  constructor(public http: HttpClient,public toastr:ToastrService, private datePipe: DatePipe,private serviceCallProvider : FetchServerDataProvider,public utils:Utils,private contactsService: ContactsService, private r: Router, private renderer: Renderer2, private emService: EventEmitterService) { 

  }
  showWindow: boolean = false;
  isOpenColumnSetting = false;
  panelcategory="";
  createType;
  //sub:any;
  contactselected:any;
  totalCount: number = 0;
  contactcardarray=[];
  contactList:any = [];

  CONTACTS_TABLE_COLUMNS = [
    {column:"Name", title:"name", display: true,type:"string"},
        {column:"Email", title:"email", display: true,type:"string"},
        {column:"Phone", title:"mobile", display: true,type:"string"},
        {column:"Company", title:"contactOrg", display: true,type:"object"},
        {column:"Designation", title:"designation", display: true,type:"string"},
        {column:"Location", title:"location", display: false,type:"string"},
        {column:"Report To", title:"reportingto", display: true,type:"string"},
        {column:"Contact Owner", title:"contactOwner", display: true,type:"string"},
        {column:"Last Activity Date", title:"updatedOn", display: true,type:"date"},
        {column:"Creation Date", title:"createdOn", display: false,type:"date"}
  ]
  ngOnInit(): void {

    this.model = this.contactsService.displayColumns;
    this.selectedRowIndex=0;
    this.tableColumns = Object.values(this.model);
    this.emService.sideWindow.subscribe(val => this.isOpenColumnSetting = val.isTrue);
    this.emService.createContact.subscribe(v=>{
      if(v){
        this.isCreateContact = true;
        this.createType = "create";
      };
    });

    this.currentContactList=this.utils.contactList;
    this.emService._scrollToTop.subscribe(v=>{
      if(null != v && null != this.viewPort){
 
        for(let i=0; i < this.currentContactList.length;i++){
          let currentContact=this.currentContactList[i];
          if(currentContact.id == v){
             this.currentContactList=this.moveArrayItemToNewIndex(this.currentContactList,i,0);
         
             this.emService.setOpenRow(currentContact.id);
          }
        }
      }
    });
    

    this.getAllContacts();

  
  }

createContact(input){

  this.serviceCallProvider.callService(this.utils.CREATECONTACT_URL,input,null).then(result => {
    let status = result[this.utils.SERVICE_CALL_STATUS];
    let output_data : any= result[this.utils.SERVICE_CALL_DATA];
   
    if(status===this.utils.STATUS_SUCCESS){
      this.toastr.success(result['msg']);
   
     this.currentContactList = output_data

      this.totalCount =this.utils.contactList.length

    } else {
  
       this.toastr.error(result['msg']);
    }
  });
}

updateContacts(input){


      this.serviceCallProvider.callService(this.utils.UPDATECONTACT_URL,input,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
      
        if(status===this.utils.STATUS_SUCCESS){
          this.toastr.success(result['msg']);
          for(let i=0; i<this.utils.contactList.length; i++){
             if(output_data.id ===this.utils.contactList[i].id){
               this.emService._updateContact.next(output_data);
               this.utils.contactList[i]=output_data;
              }
              
          }
        } else {
      
           this.toastr.error(result['msg']);
        }
      });
}
getAllContacts(){

  this.utils.serviceURL = 'contact/getall';
  this.utils.input = {};

    this.serviceCallProvider.callService(this.utils.GETALL_CONTACTS,null,true).then(result => {
      let status = result[this.utils.SERVICE_CALL_STATUS];
      let output_data : any= result[this.utils.SERVICE_CALL_DATA];
     
      if(status===this.utils.STATUS_SUCCESS){
        this.utils.contactList = [];
   
        this.utils.contactList = output_data;
        this.currentContactList = output_data;
        this.totalCount =this.utils.contactList.length
        this.moveArrayElement();
      } else {
        alert(result['message']);
      }
     
    });

}

moveArrayElement(){
 
  this.contactselected = window.localStorage.getItem("contactselected");
  if(null != this.contactselected && this.contactselected != ""){
    for(let i=0; i < this.utils.contactList.length;i++){
      let currentContact=this.utils.contactList[i];
      if(currentContact.id == this.contactselected){
         this.utils.contactList=this.moveArrayItemToNewIndex(this.utils.contactList,i,0);
         this.emService.setOpenRow(currentContact.id);
         window.localStorage.setItem("contactselected","");
        this.contactselected = "";
 
      }
    }
  } 

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

deleteContacts(id){
  
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this contact!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this.serviceCallProvider.callService(this.utils.DELETECONTACT_URL+'/'+id,null,null).then(result => {
     
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
        
        if(status===this.utils.STATUS_SUCCESS){
          let empIndex = this.utils.contactList.findIndex(el => el.id == id);
         this.utils.contactList.splice(empIndex, 1);
          let empIndex1 =  this.utils.contactList.findIndex(el => el.id == id);
          this.utils.contactList.splice(empIndex1, 1);

          this.toastr.success(result['msg']);
          this.ngOnInit();
        } else {
        }
      });
      Swal.fire(
        'Deleted!',
        'Your contact has been deleted.',
        'success',  
        
      )
    } 
  })
  
}
ngOnDestroy() {
  this.emService.showHideWindow(false, '', '');
  this.emService.setIsHierarchyOpen(false);

}
openWindow(){
  this.showWindow = true;
}
closeWindow(){
  this.showWindow = false;
}


sortColumn(columnname, assending) {
  
  this.order = columnname;
  this.assending = assending;


  for(let i=0;i < this.CONTACTS_TABLE_COLUMNS.length;i++){
    if(columnname == this.CONTACTS_TABLE_COLUMNS[i].column){

      let datcolumnname=this.CONTACTS_TABLE_COLUMNS[i].title;
      let type=this.CONTACTS_TABLE_COLUMNS[i].type;
     this.currentContactList=this.sortContacts(datcolumnname,assending,type);
    }
  }

}


filterRows(value) {
  this.searchText =value;
  this.assending = true;
  
  this.currentContactList=this.utils.contactList;
  
  this.currentContactList = [...this.filterList(this.utils.contactList, this.order, this.assending, this.searchText)];
  this.isTrue = !this.isTrue;
  this.isFirst = false;
}

sortContacts(columnname:string, isAssending:boolean,datatype:string){

  if(null == datatype || undefined == datatype){
    datatype="text";
  }
  if(null ==this.utils.contactList ){
    return this.contacts;
  }
  let temparray=this.utils.contactList;
  if(isAssending == true){
    temparray=temparray.sort(function(a, b){
      let aval=a[columnname];
      let bval=b[columnname];
      if(columnname == 'reportingto'){
        if(null != a['reportingto']){
          aval=a['reportingto'].name;  
        }else{
          aval=null;
        }

        if(null != b['reportingto']){
          bval=b['reportingto'].name;  
        }else{
          bval=null;
        }
      }

      if(columnname == 'contactOrg'){
        if(null != a['contactOrg']){
          aval=a['contactOrg'].name;  
        }else{
          aval=null;
        }

        if(null != b['contactOrg']){
          bval=b['contactOrg'].name;  
        }else{
          bval=null;
        }
      }

      if(columnname == 'contactOwner'){
        if(null != a['contactOwner']){
          aval=a['contactOwner'].name;  
        }else{
          aval=null;
        }

        if(null != b['contactOwner']){
          bval=b['contactOwner'].name;  
        }else{
          bval=null;
        }
      }
      
      if(null == aval|| undefined == aval){
        return -1
      }else if (null == bval || undefined == bval){
        return 1;
      }
      if(datatype == 'string'){
        
        return aval.localeCompare(bval);
      }else if(datatype == 'date'){
        return (new Date(aval) == new Date(bval)?0:new Date(aval) > new Date(bval)?1:-1);  
      }
      return (aval == bval?0:aval > bval?1:-1);
    });
    
   }else{

    temparray= temparray.sort(function(a, b){
      
      let aval=a[columnname];
      let bval=b[columnname];
      if(columnname == 'reportingto'){
        if(null != a['reportingto']){
          aval=a['reportingto'].name;  
        }else{
          aval=null;
        }

        if(null != b['reportingto']){
          bval=b['reportingto'].name;  
        }else{
          bval=null;
        }
      }

      if(columnname == 'contactOwner'){
        if(null != a['contactOwner']){
          aval=a['contactOwner'].name;  
        }else{
          aval=null;
        }

        if(null != b['contactOwner']){
          bval=b['contactOwner'].name;  
        }else{
          bval=null;
        }
      }

      if(columnname == 'contactOrg'){
        if(null != a['contactOrg']){
          aval=a['contactOrg'].name;  
        }else{
          aval=null;
        }

        if(null != b['contactOrg']){
          bval=b['contactOrg'].name;  
        }else{
          bval=null;
        }
      }
      if(null == aval || undefined == aval){
        return 1
      }else if (null == bval || undefined == bval){
        return -1;
      }
      if(datatype == 'string'){
        return bval.localeCompare(aval);
      }else if(datatype == 'date'){
        return (new Date(aval) == new Date(bval)?0:new Date(aval) < new Date(bval)?1:-1);  
      }
      return (aval == bval?0:aval < bval?1:-1);
    });
  }

  return [...temparray];
}

filterList(value, orderBy?, orderType?, search?) {
  if(!value || !value.length) return value;
  let order = orderBy.toLocaleLowerCase().replace(/ /g,'');

  
  if(order =='phone'){
    order='mobile';
  }
  if(order =='company'){
    order='contactOrg';
  }


  if(search) value = value.filter(function(item, index){
    let str="";
    if(order == 'contactOrg'){
      str=item.contactOrg.name;
    }else if(order == 'location'){
      str=item['location'];
    }else if(order == 'mobile'){
      str=item['mobile'];
    }else if(order == 'designation'){
      str=item['designation'];
    }else if(order == 'reportto'){
   
      if(null != item.reportingto ){
        str=item.reportingto.name;
      }
    }else if(order == 'contactowner'){
      if(null != item.contactOwner ){
        str=item.contactOwner.name;
      }
    }else if(order == 'lastactivitydate'){
      str=item['updatedOn'];
    }else if(order == 'creationdate'){
      str=item['createdOn'];
    }else if(order == 'name'){
      str=item['name'];
    }else if(order == 'email'){
      str=item['email'];
    }
 
    return str && str.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  let data = value.sort(function(a, b){
 
    if(order == 'contactowner' || order == 'reportto' || order == 'contactOrg') {
      return orderType ? a[order]? a[order].name.localeCompare(b[order]&&b[order].name):0 : b[order]? b[order].name.localeCompare(a[order] && a[order].name):0;
    }
    
    return (a[order] && b[order])? orderType ? a[order].localeCompare(b[order]) : b[order].localeCompare(a[order]):0;
  })
 
  return [...data];
}


  getId(id) {
    return id.replace(/\s/g, '');
  }
  getTime() {
    return new Date().getTime();
  }

  /* Form */
  isCreateContact= false;
  onSubmit() {

  }

  closeAddContact(event) {
    this.isCreateContact = false;
  }
  createContacts(type) {
    this.isCreateContact = true;
    this.createType = type;
    this.emService.showHideWindow(false, "", "")
  }
  selectedRow($event) {

    this.selectedHierarchy = $event;
  }
  scrollToTop($event) {

    this.viewPort.scrollToIndex( 0, "smooth");
    this.selectedRowIndex = $event;
  }
  showPanel() {

    this.isOpenColumnSetting = !this.isOpenColumnSetting;
    this.emService.showHideWindow(this.isOpenColumnSetting, ColumnListComponent, "Contacts Columns Settings");
  }

  onResizeColumn($event, i, ele) {
    this.pressed = true;
    this.startX = $event.pageX;
    this.startWidth = ele.clientWidth;
    document.querySelectorAll(i).forEach((el)=>{
      el.style.width = this.startWidth+"px";
      el.style.flex = "none";
    })
    event.preventDefault();
    this.mouseMove(i, ele);
  }
  mouseMove(index, ele) {
    this.resizableMousemove = this.renderer.listen('document', 'mousemove', ($event) => {
      if (this.pressed && $event.buttons ) {
        let distance = $event.pageX-this.startX;
        document.querySelectorAll(index).forEach((el)=>{
          el.style.width = (this.startWidth + distance)+"px";
          el.style.flex = "none";
        })
      }
    });
    this.resizableMouseup = this.renderer.listen('document', 'mouseup', ($event) => {
      let distance = $event.pageX-this.startX;
      if (this.pressed) {
        this.resizableMousemove();
        this.resizableMouseup();
        this.pressed = false;
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    document.querySelectorAll(".columns").forEach((el:HTMLDivElement)=>{
      el.style.width = "";
      el.style.flex = "1";
    })
  }

  focusedOut(event: any):void {
    }
    
    focused(event: any):void {
    }
}
