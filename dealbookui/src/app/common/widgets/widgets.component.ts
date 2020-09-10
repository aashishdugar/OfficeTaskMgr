import { Component, OnInit, ViewChild, Input, AfterViewInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { ContactsService } from '../../services/contacts.service';
import { EventEmitterService } from '../../services/event-emitter.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Utils } from '../../../../src/app/providers/utils';
import { FetchServerDataProvider } from '../../../../src/app/providers/fetchserverdata';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {
  ACTIVITY_TABLE_COLUMNS = [
    {column:"Contact Name", title:"contactName", display: true,type:"string"},
    {column:"Activity Type", title:"activityType", display: true,type:"string"},
    {column:"Comment", title:"comment", display: true,type:"string"},
    {column:"Created By", title:"createdBy", display: true,type:"string"},
    {column:"FollowUp Date", title:"followUp", display: true,type:"date"},
    {column:"Creation Date", title:"date", display: true,type:"date"},
  ];

  CONTACTS_TABLE_COLUMNS = [
    {column:"Name", title:"name", display: true,type:"string"},
        {column:"Email", title:"email", display: true,type:"string"},
        {column:"Phone", title:"phone", display: true,type:"string"},
        {column:"Company", title:"company", display: true,type:"string"},
        {column:"Designation", title:"designation", display: true,type:"string"},
        {column:"Location", title:"location", display: false,type:"string"},
        {column:"Report To", title:"reportto", display: true,type:"string"},
        {column:"Contact Owner", title:"contactowner", display: true,type:"string"},
        //{column:"Last Activity Date", title:"lastactivitydate", display: true,type:"date"},
        {column:"Creation Date", title:"creationdate", display: false,type:"date"}
  ];

  date = ["creationdate", "lastactivitydate", "date", "fallowUp"];

  displayedColumns: string[];
  dataSource = new MatTableDataSource([]);
  pageSize = 10;
  pageSizeOptions: number[] = [5,10,20,50];
  title="";
  id="";
  dataArr:any = [];
  assending:boolean=false;
  columnsData = null;
  criteria:any = '';
  type="";
  isStandard:boolean=false;

  @ViewChild(MatSort, {static: false}) set contentSorting(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  @ViewChild(MatPaginator, {static: false}) set contentPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  //@Input("data") data;
  @Input("updateWidget") updateWidget;
  @Input("data")  data;
  toggle:boolean=false;
  minimize= {height:'2.5rem',overflow:'hidden'};
  maximize={height:'100%'};
  constructor(private serviceCallProvider:FetchServerDataProvider,private utils:Utils,private router: Router,private datePipe: DatePipe,private contactService: ContactsService, private emService: EventEmitterService) {
   }

  ngOnInit() {
     if(null != this.data && null != this.data.criteria ){
      this.setWidgetData(this.data);
      this.dataSource = new MatTableDataSource(this.data);
    }

  }
  ngAfterViewInit()	{

  }

  toggleButton(){
    this.toggle=!this.toggle;
  }
  setWidgetData(val){
      this.id = val.id;
      this.title=val.title;
      this.criteria = val.criteria;
      this.isStandard=val.isStandard;
      // this.criteria="Activity";
      let dataArray=[];
      if(this.criteria !=null && this.criteria == "Contact"){
        this.displayedColumns=this.CONTACTS_TABLE_COLUMNS.map(column => column.title);
        //this.displayedColumns=["name","email","phone","company","designation","location","reportto","contactowner","creationdate"];
        this.dataArr = val.contactList;
        let tempArray=[];
        for(let i=0;i < this.dataArr.length;i++){
          let contData={};
          let elementAt=this.dataArr[i];
          contData["id"]=elementAt.id;
         contData["contactid"]=elementAt.id;
         contData["name"]=elementAt.name;
         contData["email"]=elementAt.email;
         contData["phone"]=elementAt.mobile;
         contData["designation"]=elementAt.designation;
          if(null != elementAt.contactOrg){
            contData["company"]=elementAt.contactOrg.name;
          }else{
            contData["company"]="";
          }
          if(null != elementAt.address){
            contData["location"]=elementAt.address.city;
          }else{
            contData["location"]="";
          }
          if(null != elementAt.reportingto){
            contData["reportto"]=elementAt.reportingto.name;
          }else{
            contData["reportto"]="";
          }
          if(null != elementAt.contactowner){
            contData["contactowner"]=elementAt.contactowner.name;
          }else{
            contData["contactowner"]="";
          }
          contData["creationdate"]=elementAt.createdOn;


          tempArray[i]=contData;
        }
        this.dataArr=tempArray;
        this.data=tempArray;
      }else if(this.criteria == "Activity"){
        this.displayedColumns=this.ACTIVITY_TABLE_COLUMNS.map(column => column.title);
        this.dataArr = val.activityList;
        let tempArray=[];
        for(let i=0;i < this.dataArr.length;i++){
          let actData={};
          let elementAt=this.dataArr[i];
         actData["id"]=elementAt.id;
         if(null != elementAt.contact){
          actData["contactName"]=elementAt.contact.name;
          actData["contactid"]=elementAt.contact.id;

         }else{
          actData["contactName"]="";
         }

         if(null != elementAt.type){
          actData["activityType"]=elementAt.type.name;
         }else{
          actData["activityType"]="";
         }
         actData["comment"]=elementAt.note;
         actData["createdBy"]=elementAt.createdByName;
         actData["followUp"]=elementAt.followupDate;
         actData["date"]=elementAt.createdOn;
          tempArray[i]=actData;
        }
        this.dataArr=tempArray;
        this.data=tempArray;

      }
      if(this.dataArr == null ){
        this.dataArr=[];
      };
      this.dataSource = new MatTableDataSource(this.data);

  };
  openContact(contactToOpen){

    window.localStorage.setItem("contactselected",JSON.stringify(contactToOpen.contactid));


  }

  sortColumn(column,order){
    this.assending=!(this.assending);
    //let datacolumn=column.title;
    let columnname=column.name;

    for(let i=0;i < this.ACTIVITY_TABLE_COLUMNS.length;i++){
      if(columnname == this.ACTIVITY_TABLE_COLUMNS[i].column){
        let datcolumnname=this.ACTIVITY_TABLE_COLUMNS[i].title;
        let type=this.ACTIVITY_TABLE_COLUMNS[i].type;
        this.data=this.sortContacts(datcolumnname,order,type);
        this.dataSource = new MatTableDataSource(this.data);
      }
    }

  }

  sortContacts(columnname:string, isAssending:boolean,datatype:string){
    if(null == datatype || undefined == datatype){
      datatype="text";
    }
    if(null == this.data ){
      return this.data;
    }
    let temparray=this.data;
    if(isAssending == true){

      temparray= this.data.sort(function(a, b){
        let aval=a[columnname];
        let bval=b[columnname];

        if(columnname == 'reportto'){
          if(null != a['reportto']){
            aval=a['reportto'].name;
          }else{
            aval=null;
          }

          if(null != b['reportto']){
            bval=b['reportto'].name;
          }else{
            bval=null;
          }
        }

        if(columnname == 'contactowner'){
          if(null != a['contactowner']){
            aval=a['contactowner'].name;
          }else{
            aval=null;
          }

          if(null != b['contactowner']){
            bval=b['contactowner'].name;
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

      temparray=  this.data.sort(function(a, b){
        let aval=a[columnname];
        let bval=b[columnname];
        if(columnname == 'reportto'){
          if(null != a['reportto']){
            aval=a['reportto'].name;
          }else{
            aval=null;
          }

          if(null != b['reportto']){
            bval=b['reportto'].name;
          }else{
            bval=null;
          }
        }

        if(columnname == 'contactowner'){
          if(null != a['contactowner']){
            aval=a['contactowner'].name;
          }else{
            aval=null;
          }

          if(null != b['contactowner']){
            bval=b['contactowner'].name;
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


  renderDate(date, key) {

    if(null != key && undefined != key && ("date" == key || "followUp" == key) && null != date && undefined != date){
      return this.datePipe.transform(date, 'dd MMM y, h:mm a');
    }else{
        return date ? new Date(date).toDateString() : "";
    }
  }
  renderValue(data, title) {
    if(data && typeof data === 'object') {
      return data.name;
    }
    return data;
  }
  editWidget(id) {
  }
  deleteWidget(id, title,$event) {
    if( null != id && id != undefined){
      for(let i=0; i < this.utils.widgets.length; i++){
        if(id == this.utils.widgets[i].id){
          this.deleteWidgetNow(this.utils.widgets[i],i);

        }
      }

    }


  }

  deleteWidgetNow(widget,index){



  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this Widget!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      let id=widget.id;
      let url=this.utils.DELETEWIDGET_URL+"/"+id;
      this.serviceCallProvider.callService(url,id,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];

        if(status===this.utils.STATUS_SUCCESS){
          for(let i=0;i < this.utils.widgets.length; i ++){

            if(this.utils.widgets[i].id == id){
              this.utils.widgets.splice(i,1);
            }
          }
          //this.utils.widgets.push(output_data);
        } else {

        }
      });
      Swal.fire(
        'Deleted!',
        'Your Widget has been deleted.',
        'success',
      )
    }
  })



  }
}
