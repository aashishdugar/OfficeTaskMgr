import {Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ContactsModel } from 'src/app/model/contacts.model';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { Utils } from 'src/app/providers/utils';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  model = new ContactsModel();
  //criteriaList: any = ['Contacts', 'Activities'];
  FILTERJOINTEXT=":::";
  widgeterror:string="";
  filtererror:string="";
  activitytypeerror:string="";
  criteriaerror:string="";
  updatedbyerror:string="";
  followuperror:string="";
  createdonerror:string="";
  companyerror:string="";
  designationerror:string="";
  locationerror:string="";
  contactownererror:string="";
  reporttoerror:string="";
  lastactivitydateerror:string="";
  FIlterBy: any = [];
  FIlterOptions: any = [];
  FIlterOValues: any = [];
  filterByOptions:any=[];
  isSubmitted = false;
  updateWidget = false;
  widgetcriteria="";
  companyList:any=[];
  designationList:any=[];
  reporttoList:any=[];
  contactownerList:any=[];
  filterbymodel:any=[];
  creationDateList:any=[];
  lastActivateDateList:any=[];
  actTypeList:any=[];
  followupDateList:any=[];
  updatedByList:any=[];
  activityTypeList:any=[];
  locationList:any=[];
  company:any=[];
  activityType:any=[];
  followUpDate:any=[];
  updatedby:any=[];
  contactOwner:any=[];
  reportsto:any=[];
  designation:any=[];
  location:any=[];
  lastActiveDate:any=[];
  creationDate:any=[];
  

  filterCriteria:any=['Contacts', 'Activities'];
  // editDashboard:any="";
  // saveDashboard:any="";
  // options:any=[];  
  filterFromList = [
    {day : this.getValue(0), name : "Today"},
    {day : this.getValue(1), name : "Yesterday"},
    {day : this.getValue(2), name : "Last 2 Days"},
    {day : this.getValue(5), name : "Last 5 Days"},
    {day : this.getValue(7), name : "Last Week"}
  ];

  followUpFromList = [
    {day : this.getValue(0), name : "Today"},
    {day : this.getValue(-1), name : "Tomorrow"},
    {day : this.getValue(-2), name : "Next 2 Days"},
    {day : this.getValue(-5), name : "Next 5 Days"},
    {day : this.getValue(-7), name : "Next Week"},
  ];

  /*########### Form ###########*/
 registrationForm = this.fb.group({
  widgetName:  new FormControl('', [  
    Validators.required,  
    Validators.minLength(1),  
    Validators.maxLength(30),  
    Validators.pattern('^[a-zA-Z ]*$')]),
  widgetCriteria: [null, [Validators.required]],
  widgetFIlterBy: [null, [Validators.required]],
  widgetCompanyOptions: [null, [Validators.required]],
  widgetActivityTypeOptions: [null, [Validators.required]],
  widgetFollowUpOptions: [null, [Validators.required]],
  widgetUpdatedbyOptions: [null, [Validators.required]],
  widgetContactOwnerOptions: [null, [Validators.required]],
  widgetReportsToOptions: [null, [Validators.required]],
  widgetDesignationOptions: [null, [Validators.required]],
  widgetLastActiveDateOptions: [null, [Validators.required]],
  widgetCreationDateOptions: [null, [Validators.required]],
  widgetLocationOptions: [null, [Validators.required]],
  widgetFIlterOptions: new FormArray([])
});

  //widgets=[];
  openWindow: boolean = false;
  constructor(public toster:ToastrService,private serviceCallProvider:FetchServerDataProvider,public utils:Utils,private contactService: ContactsService, private emService: EventEmitterService, public fb: FormBuilder){
  
  }
  ngOnInit() {
    
      this.criteriaerror="";
      this.companyList=[];
      this.designationList=[];
      this.reporttoList=[];
      this.contactownerList=[];
      this.filterbymodel=[];
      this.creationDateList=[];
      this.lastActivateDateList=[];
      this.FIlterOptions=[];
      this.actTypeList=[];
      this.actTypeList=[];
      this.followupDateList=[];
      this.updatedByList=[];
      this.activityTypeList=[];
      this.company=[];
      this.activityType=[];
      this.followUpDate=[];
      this.updatedby=[];
      this.contactOwner=[];
      this.reportsto=[];
      this.designation=[];
      this.lastActiveDate=[];
      this.creationDate=[];
      this.getAllStaticData();
  }

  ngOnDestroy(){
 
  }
 
  
  getAllStaticData(){
    let userID:any = '';
    userID = localStorage.getItem('userID');
       this.serviceCallProvider.callService(this.utils.GETSTATICDATA_URL+'/'+userID,null,true).then(result => {
            let status = result[this.utils.SERVICE_CALL_STATUS];
            let output_data : any= result[this.utils.SERVICE_CALL_DATA];
           
            if(status===this.utils.STATUS_SUCCESS){
              let country:any = [];
              let staticData = output_data;
              this.utils.widgets=staticData.userWidgetList;
              this.utils.orgnizationList = staticData.contactOrgList;
              this.utils.roleList = staticData.roleList;
              localStorage.setItem("staticRoleData",JSON.stringify(this.utils.roleList));
              this.utils.countryList = staticData.countryList;
              localStorage.setItem("staticCountryData",JSON.stringify(this.utils.countryList));
              this.utils.contactTypeList = staticData.contactTypeList;
              localStorage.setItem("staticContactTypeData",JSON.stringify(this.utils.contactTypeList));
              this.filterCriteria = staticData.criteriaEntityList;
              this.utils.companiesList=staticData.contactOrgList;

             country = staticData.countryWithStatesList;
              if(country.length > 0){
                    localStorage.setItem("countryListArr",JSON.stringify(country));
              }
            } else {
              //this.alertService.error(result['message']); 
              if(null != result && null != result['msg']){
                let msg=result['msg'];
                if(msg.indexOf("UserWidget Not Found for Id") !== -1){
                  this.toster.error(result['msg']);
                }
              }
              
            }
          });
      
      }
  ngAfterViewInit(){
    //this.getAllStaticData();
  }
  getList(item) {
    if(item == "followUpDate") {
      return this.followUpFromList;
    }
    return this.filterFromList;
  }
  getValue(days) {
    let d = new Date();
    d.setDate(d.getDate() - days);
    return d.setHours(0,0,0,0);
  }

  getData(val) {
    if(typeof val == "object") {
      return val.name;
    }
    return val;

  }
  createWidget($event) {
    this.designationList=[];
      this.reporttoList=[];
      this.contactownerList=[];
      this.filterbymodel=[];
      this.creationDateList=[];
      this.lastActivateDateList=[];
      this.FIlterOptions=[];
      this.actTypeList=[];
      this.actTypeList=[];
      this.followupDateList=[];
      this.updatedByList=[];
      this.activityTypeList=[];
      this.company=[];
      this.activityType=[];
      this.followUpDate=[];
      this.updatedby=[];
      this.contactOwner=[];
      this.reportsto=[];
      this.designation=[];
      this.lastActiveDate=[];
      this.creationDate=[];
    this.openWindow = true;
    this.registrationForm.reset();
    this.FIlterBy =[];
    this.FIlterOptions =[];
  }
  closeWindow($event) {
    this.openWindow = false;
    this.registrationForm.reset();
    this.FIlterBy =[];
    this.FIlterOptions =[];
  }

 
  // Choose city using select dropdown
  changeCriteria(e) {
    this.criteriaerror="";
    this.companyList=[];
    this.designationList=[];
    this.reporttoList=[];
    this.contactownerList=[];
    this.filterbymodel=[];
    this.creationDateList=[];
    this.lastActivateDateList=[];
    this.FIlterOptions=[];
    this.actTypeList=[];
    this.actTypeList=[];
    this.followupDateList=[];
    this.updatedByList=[];
    this.activityTypeList=[];
    this.company=[];
    this.activityType=[];
    this.followUpDate=[];
    this.updatedby=[];
    this.contactOwner=[];
    this.reportsto=[];
    this.designation=[];
    this.lastActiveDate=[];
    this.creationDate=[];
    this.locationList=[];
    this.FIlterBy = this.model[this.model.const[this.f.get("widgetCriteria").value]];
    this.f.controls["widgetFIlterBy"].reset();
    this.f.controls["widgetFIlterOptions"].reset();

    this.serviceCallProvider.callService(this.utils.GETCRITERIAFILTERDATA_URL+'/'+e,null,true).then(result => {
      let status = result[this.utils.SERVICE_CALL_STATUS];
      let output_data : any= result[this.utils.SERVICE_CALL_DATA];
     
      if(status===this.utils.STATUS_SUCCESS){
        this.FIlterBy = output_data
      } else {
        alert(result['message']);
      }
    });

  }

   changeContactFilter(filterType) {
    let serviceURL ="";
    if("Company" ===  filterType ){
      serviceURL = this.utils.GETALLCOMPANY_URL;
      this.serviceCallProvider.callService(serviceURL,null,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
        if(status===this.utils.STATUS_SUCCESS){
          this.companyList = [];
          this.companyList = output_data;
        } else {
          alert(result['message']);
        }
      });
    }else if("Designation" === filterType){
        let serviceurl = this.utils.GETDESIGNATION_URL;
        this.serviceCallProvider.callService(serviceurl,null,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
        if(status===this.utils.STATUS_SUCCESS){
          this.designationList = [];
          this.designationList = output_data;
        } else {
          alert(result['message']);
        }
      });
    }else if("Location" === filterType){
        let serviceurl = this.utils.GETLOCATIONLIST_URL;
        this.serviceCallProvider.callService(serviceurl,null,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
        if(status===this.utils.STATUS_SUCCESS){
          this.locationList = [];
          this.locationList = output_data;
        } else {
          alert(result['message']);
        }
      });
  }else if("Report To" === filterType){
        serviceURL = this.utils.GETREPORTINGTO_URL;
        this.serviceCallProvider.callService(serviceURL,null,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
      
        if(status===this.utils.STATUS_SUCCESS){
          this.reporttoList = [];
          this.reporttoList = output_data;
        } else {
          alert(result['message']);
        }
      });
    }else if("Contact Owner" === filterType){
        serviceURL =this.utils.GETCONTACTOWNER_URL;
        this.serviceCallProvider.callService(serviceURL,null,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
        if(status===this.utils.STATUS_SUCCESS){
          this.contactownerList = [];
          this.contactownerList = 	this.checkNull(output_data);
        } else {
        
          alert(result['message']);
        }
      });
    }else if("Creation Date" === filterType){
      this.creationDateList = [];
      this.creationDateList = this.filterFromList;
    }else if("Activity Type" === filterType){

        this.serviceCallProvider.callService(this.utils.GETACTIVITYTYPE_URL,null,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
      
        if(status===this.utils.STATUS_SUCCESS){
          this.FIlterOptions = [];
          this.FIlterOptions = 	this.checkNull(output_data);
        
      
        } else {
        
          alert(result['message']);
        }
      });
    }else if("Update By" === filterType){

        this.serviceCallProvider.callService(this.utils.GETUPDATEDBY_URL,null,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
      
        if(status===this.utils.STATUS_SUCCESS){
          this.updatedByList = [];
          this.updatedByList = 	this.checkNull(output_data);
        
      
        } else {
        
          alert(result['message']);
        }
      });
    }else if("FollowUp Date" === filterType){
      this.followUpFromList = [];
      this.followUpFromList = this.followUpFromList;
    }
    else if("Last Active Date" === filterType){
      this.lastActivateDateList = [];
      this.lastActivateDateList = this.filterFromList;

    }
    console.info("filterOptions--", JSON.stringify(this.FIlterOptions));
  }


  changeActivityFilter(filterType) {
    if("Activity Type" === filterType){
        this.serviceCallProvider.callService(this.utils.GETACTIVITYTYPE_URL,null,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
      
        if(status===this.utils.STATUS_SUCCESS){
          this.activityTypeList = [];
          this.activityTypeList = 	this.checkNull(output_data);
        } else {
        
          alert(result['message']);
        }
      });
    }else if("FollowUp Date" === filterType){
      this.followupDateList = [];
      this.followupDateList = this.filterFromList;
    }else if("Created On" === filterType){
      this.creationDateList = [];
      this.creationDateList = this.filterFromList;
    }else if("Update By" === filterType){

      let serviceURL =this.utils.ACTIVITYCREATEDUPDATEDBY_URL;
      this.serviceCallProvider.callService(serviceURL,null,true).then(result => {
      let status = result[this.utils.SERVICE_CALL_STATUS];
      let output_data : any= result[this.utils.SERVICE_CALL_DATA];
      if(status===this.utils.STATUS_SUCCESS){
        this.updatedByList = [];
        this.updatedByList = 	this.checkNull(output_data);
      } else {
      
        alert(result['message']);
      }
      
    });
  }
    console.info("filterOptions--", JSON.stringify(this.FIlterOptions));
  }

  changeFilter(val) {
    this.criteriaerror="";
    this.companyList=[];
    this.designationList=[];
    this.reporttoList=[];
    this.contactownerList=[];
    this.creationDateList=[];
    this.lastActivateDateList=[];
    this.actTypeList=[];
    this.actTypeList=[];
    this.followupDateList=[];
    this.updatedByList=[];
    this.activityTypeList=[];
    this.company=[];
    this.activityType=[];
    this.followUpDate=[];
    this.updatedby=[];
    this.contactOwner=[];
    this.reportsto=[];
    this.designation=[];
    this.lastActiveDate=[];
    this.creationDate=[];
    this.locationList=[];
    let filterType = val;
    this.filtererror="";
    let widgetcriteriaName="";
    for(let i=0; i < this.filterCriteria.length; i++){
      let element=this.filterCriteria[i];
      if(element.id == this.widgetcriteria){
        widgetcriteriaName=element.name;
      }
    }
    
    
    for(let n=0; n < this.filterbymodel.length; n++){
      filterType=this.filterbymodel[n];
      for(let i=0; i < this.FIlterBy.length; i++){
        let element=this.FIlterBy[i];
        if(element.id == filterType){
          filterType=element.name;
        }
      }
      if(widgetcriteriaName == 'Contact'){
        this.changeContactFilter(filterType);
        
      }
      if(widgetcriteriaName == 'Activity'){
        this.changeActivityFilter(filterType);
      }
    }
    
    
    
  }

  checkNull(input) {
    if (input === undefined || input === null) {
        input = "";
      } else {
        var type = typeof (input);
        if ("string" == type.toLowerCase()) {
          var encodedStr = input;
          var parser = new DOMParser;
          var dom = parser.parseFromString(
            '<!doctype html><body>' + encodedStr,
            'text/html');
          input = dom.body.textContent;
        } 
    }
		return input;
  }
  // Getter method to access formcontrols
  get f() {
    return this.registrationForm;
  }
  get o() {
    return this.f.controls.widgetFIlterOptions as FormArray;;
  }

  findByID (array, value) {
   for(let i=0; i < array.length;i++){
     if(array[i].id == value){
       return array[i];
     }
   }
  };

  findValuesByID (array:any, value:any) {
    let values=[];
    for(let i=0; i < array.length;i++){
      for(let j=0; j < value.length;j++){
        if(array[i].id == value[j]){
          values.push( array[i]);
        }
      }
    }
    return values;
   };
  /*########### Template Driven Form ###########*/
  onSubmit() {
    let tempReq:any={};
    this.isSubmitted = true;
    let username=localStorage.getItem("userName");
    let uid =  localStorage.getItem("userID");
    tempReq.owner = {id:uid,"name":username}; 
    tempReq.title = this.registrationForm.value.widgetName;
    let widgetName=this.registrationForm.value.widgetName;
    let widgetCriteria=this.registrationForm.value.widgetCriteria;
    let widgetFIlterBy=this.registrationForm.value.widgetFIlterBy;
    let widgetActivityTypeOptions=this.registrationForm.value.widgetActivityTypeOptions;
    let widgetFollowUpOptions=this.registrationForm.value.widgetFollowUpOptions;
    let widgetUpdatedbyOptions=this.registrationForm.value.widgetUpdatedbyOptions;
    let widgetCompanyOptions=this.registrationForm.value.widgetCompanyOptions;
    let widgetContactOwnerOptions=this.registrationForm.value.widgetContactOwnerOptions;
    let widgetReportsToOptions=this.registrationForm.value.widgetReportsToOptions;
    let widgetDesignationOptions=this.registrationForm.value.widgetDesignationOptions;
    let widgetLocationOptions=this.registrationForm.value.widgetLocationOptions;
    let widgetLastActiveDateOptions=this.registrationForm.value.widgetLastActiveDateOptions;
    let widgetCreationDateOptions=this.registrationForm.value.widgetCreationDateOptions;
    if(null == widgetName || widgetName == ""){
      this.widgeterror="Please Enter Widget Name";
      return;
    }
    if(null == widgetCriteria || widgetCriteria == ""){
      this.criteriaerror="Please Select Criteria";
      return;
    }
    if(null == widgetFIlterBy || widgetFIlterBy == ""){
      this.filtererror="Please Select Filter";
      return;
    }
    let criteria=this.findByID(this.filterCriteria,widgetCriteria);
    tempReq.criteriaEntity={id:criteria.id};
    criteria=criteria.name;
    /*
      Activity Processing
    */
    if(criteria == "Activity"){
      let widgetFilterList=[];
      if(null != widgetFIlterBy && widgetFIlterBy != ""){
        let filterArray=widgetFIlterBy.toString().split(",");
        for(let i=0; i < filterArray.length;i++){
          
          let filterElement=this.findByID(this.FIlterBy,filterArray[i]);
          if("Activity Type" == filterElement.name){
            if(null == widgetActivityTypeOptions || widgetActivityTypeOptions.length <= 0){
              this.activitytypeerror="Please Select "+filterElement.name;
              return;
            }else{
              this.activitytypeerror="";
              let activitytypevalue=widgetActivityTypeOptions.join(this.FILTERJOINTEXT);
              widgetFilterList.push({name:"Activity Type",filterValue:activitytypevalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
            
          }

          if("Update By" == filterElement.name){
            if(null == widgetUpdatedbyOptions || widgetUpdatedbyOptions.length <= 0){
              this.updatedbyerror="Please Select "+filterElement.name;
              return;
            }else{
              this.updatedbyerror="";
              let updatedbyvalue=widgetUpdatedbyOptions.join(this.FILTERJOINTEXT);
              widgetFilterList.push({name:"Update By",filterValue:updatedbyvalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
            
          }

          if("Created On" == filterElement.name){
            if(null == widgetCreationDateOptions || widgetCreationDateOptions.length <= 0){
              this.createdonerror="Please Select "+filterElement.name;
              return;
            }else{
              this.createdonerror="";
              let updatedbyvalue=widgetCreationDateOptions.toString();
              widgetFilterList.push({name:"Created On",filterValue:updatedbyvalue});
              tempReq.widgetFilterList=widgetFilterList;
            }

          }

          if("FollowUp Date" == filterElement.name){
            if(null == widgetFollowUpOptions || widgetFollowUpOptions.length <= 0){
              this.followuperror="Please Select "+filterElement.name;
              return;
            }else{
              this.followuperror="";
              let updatedbyvalue=widgetFollowUpOptions.toString();
              widgetFilterList.push({name:"FollowUp By",filterValue:updatedbyvalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
          }
        }
      }
      /*
        Sending Activity Widget Create Request 
        */
       this.requestWidgetCreate(tempReq);
       return;
    }

    if(criteria == "Contact"){
      let widgetFilterList=[];
      if(null != widgetFIlterBy && widgetFIlterBy != ""){
        let filterArray=widgetFIlterBy.toString().split(",");
        for(let i=0; i < filterArray.length;i++){
          let filterElement=this.findByID(this.FIlterBy,filterArray[i]);
          
          if("Company" == filterElement.name){
            if(null == widgetCompanyOptions || widgetCompanyOptions.length <= 0){
              this.companyerror="Please Select "+filterElement.name;
              return;
            }else{
              this.companyerror="";
              let activitytypevalue=widgetCompanyOptions.join(this.FILTERJOINTEXT);
              widgetFilterList.push({name:"Company",filterValue:activitytypevalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
            
          }

          if("Designation" == filterElement.name){
            if(null == widgetDesignationOptions || widgetDesignationOptions.length <= 0){
              this.designationerror="Please Select "+filterElement.name;
              return;
            }else{
              this.designationerror="";
              let activitytypevalue=widgetDesignationOptions.join(this.FILTERJOINTEXT);
              widgetFilterList.push({name:"Designation",filterValue:activitytypevalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
            
          }

          if("Location" == filterElement.name){
            if(null == widgetLocationOptions || widgetLocationOptions.length <= 0){
              this.locationerror="Please Select "+filterElement.name;
              return;
            }else{
              this.locationerror="";
              let activitytypevalue=widgetLocationOptions.join(this.FILTERJOINTEXT);
              widgetFilterList.push({name:"Location",filterValue:activitytypevalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
            
          }

          if("Report To" == filterElement.name){
            if(null == widgetReportsToOptions || widgetReportsToOptions.length <= 0){
              this.reporttoerror="Please Select "+filterElement.name;
              return;
            }else{
              this.reporttoerror="";
              let activitytypevalue=widgetReportsToOptions.join(this.FILTERJOINTEXT);
              widgetFilterList.push({name:"Report To",filterValue:activitytypevalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
            
          }

          if("Contact Owner" == filterElement.name){
            if(null == widgetContactOwnerOptions || widgetContactOwnerOptions.length <= 0){
              this.contactownererror="Please Select "+filterElement.name;
              return;
            }else{
              this.contactownererror="";
              let activitytypevalue=widgetContactOwnerOptions.join(this.FILTERJOINTEXT);
              widgetFilterList.push({name:"Contact Owner",filterValue:activitytypevalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
            
          }

          if("Creation Date" == filterElement.name){
            if(null == widgetCreationDateOptions || widgetCreationDateOptions.length <= 0){
              this.createdonerror="Please Select "+filterElement.name;
              return;
            }else{
              this.createdonerror="";
              let updatedbyvalue=widgetCreationDateOptions.toString();
              widgetFilterList.push({name:"FollowUp By",filterValue:updatedbyvalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
          }

          if("Last Active Date" == filterElement.name){
            if(null == widgetLastActiveDateOptions || widgetLastActiveDateOptions.length <= 0){
              this.lastactivitydateerror="Please Select "+filterElement.name;
              return;
            }else{
              this.lastactivitydateerror="";
              let updatedbyvalue=widgetLastActiveDateOptions.toString();
              widgetFilterList.push({name:"Last Active Date",filterValue:updatedbyvalue});
              tempReq.widgetFilterList=widgetFilterList;
            }
          }
        }
      }
      /*
        Sending Contact Widget Create Request 
        */
       this.requestWidgetCreate(tempReq);
       return;
    }
  }


  requestWidgetCreate(input){
    this.serviceCallProvider.callService(this.utils.CREATEWIDGET_URL,input,null).then(result => {
      let status = result[this.utils.SERVICE_CALL_STATUS];
      let output_data : any= result[this.utils.SERVICE_CALL_DATA];
    
      if(status===this.utils.STATUS_SUCCESS){
        this.utils.widgets.push(output_data);
      } else {
        //this.alertService.error(result['message']); 
        this.toster.error(result['msg']);
      }
    });
  }

  deleteWidget(id){
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
      } else {
        if(null != result && null != result['msg']){
          let msg=result['msg'];
          if(msg.indexOf("UserWidget Not Found for Id") !== -1){
            this.toster.error(result['msg']);
          }
        }
      }
    });

  }
}


