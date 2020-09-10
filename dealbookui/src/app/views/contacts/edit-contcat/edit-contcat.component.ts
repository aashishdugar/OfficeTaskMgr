import { Component, OnInit, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray  } from '@angular/forms';
import { EventEmitterService } from '../../../services/event-emitter.service';
import { ContactsService,Contact  } from '../../../services/contacts.service';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { ContactsComponent }from '../contacts.component'
//import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import { Utils } from '../../../providers/utils';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-edit-contcat',
  templateUrl: './edit-contcat.component.html',
  styleUrls: ['./edit-contcat.component.scss']
})
export class EditContcatComponent implements OnInit {
  @Output('closeAddContact') closeAddContact = new EventEmitter<any>();
  @Input('createType') createType;
  @Input() title:string;
  myDateValue = new Date();
  editObject = null;
  isReportToList: boolean = false;
  reporttolist:any = [];
  contactInput:any = [];
  searchText:string;
  assending= true;
  totalCount:any = '';
  stateArr:any = [];
  // allcontactlistarr:any = [];
  contCountry:any="";
  consalutation:any="";
  concompany:any="";
  companyList:any=[];
  // reportingtoList:any=[];
  slectedCountry:any = '';
  slectedSate:any = '';
  salutation:any = '';
  name:any = '';
  email:any = '';
  phone:any = '';
  company:any = '';
  designation:any = '';
  reportsto:any = '';
  contactowner:any = '';
  isuser:any = '';
  contacttype:any = '';
  role:any = '';
  line:any = '';
  city:any = '';
  zipCode:any = '';
  isUser:any = '';
  contactOwnerList:any=[];
  error:string="";
  reportstoname="";
  @Input("contact") set contact(input){
    if(this.title == 'Edit Contact' && input) {
      this.editObject = {...input}
      this.searchText = input.reportto && input.reportto.name;
      
        this.contactObj = {
            id:input.id,
            name:input.name,
            salutation:input.salutation,
            email:input.email,
            mobile:input.mobile,
            designation:input.designation,
            role:input.role && input.role.id,
            reportto: input.reportingto && input.reportingto.name ,
            contactOrg:input.contactOrg  && input.contactOrg.id,
            contacttype:input.contacttype && input.contacttype.id,
            contactowner:input.contactowner && input.contactowner.id,
            isuser:input.isuser,
            address:input.address
          
        };

        this.salutation = input.salutation
        this.name = input.name
        this.email = input.email
        this.phone = input.mobile
        if(input.contactOrg !== null){
          this.company = input.contactOrg.id;
        }
        this.designation = input.designation
        if(input.reportingto !== null){
          this.reportsto = input.reportingto.id;
          this.reportstoname= input.reportingto.name;
        }
        if(input.contactOwner !== null){
        this.contactowner = input.contactOwner.id;
        }
        this.isuser = input.isUser;
        if(input.contactType !== null){
        this.contacttype = input.contactType.id;
        }
        if(input.role !== null){
        this.role = input.role.id;
        }
        if(input.address !== null){
          this.line = input.address.line;
          this.city = input.address.city;
          this.zipCode = input.address.zipCode;
          if(null != input.address.state){
            this.slectedSate = input.address.state.id;
            if(null != input.address.state.country){
              this.slectedCountry = input.address.state.country.id;
            
            }
          }
        }
  
        if(null == this.contactObj.address || undefined == this.contactObj.address){
          this.contactObj.address={
            line:"",
            country:"",
            state:"",
            city:"",
            zipCode:"",
          };
        }
    
      
    }

  };
  allEmpsList:Contact[];
  contactObj = {
    id:"",
    name:"",
    salutation:"",
      email:"",
      mobile:"",
      designation:"",
      role:"",
      reportto: "",
      contactOrg:"",
      contacttype:"",
      contactowner:"",
      isuser:"",
      address:{
        line:"",
        country:"",
        state:"",
        city:"",
        zipCode:"",

    }

  };
  

  ownersList:Observable<Contact[]>;
  editcontactForm: FormGroup;
   constructor(public contactsComponent:ContactsComponent,private toastr:ToastrService,private serviceCallProvider:FetchServerDataProvider,private utils:Utils,private _formBuilder: FormBuilder, private contactService: ContactsService, private emService : EventEmitterService) {
  }


    ngOnInit(): void {
      this.utils.roleList = JSON.parse(localStorage.getItem('staticRoleData'));
      this.utils.contactTypeList= JSON.parse(localStorage.getItem('staticContactTypeData'));
      this.utils.countryList= JSON.parse(localStorage.getItem('countryListArr'));
      this.companyList=this.utils.companiesList;
      for(let i=0;i<this.utils.countryList.length;i++){
  
        if(this.utils.countryList[i].id == this.slectedCountry){
          this.stateArr = this.utils.countryList[i].stateList
        }
      }
this.emService.createContact.subscribe(v=> {
     if(v ){
          this.contactService.getHierarchyFlag(true);
          this.contactObj.contactOrg = v.company;
          this.contactObj.reportto = v.name;
          if(this.editcontactForm){
            this.editcontactForm.get("newContacts")['controls'][0].get("reportto").get("id").setValue(v.id);
            this.editcontactForm.get("newContacts")['controls'][0].get("reportto").get("name").setValue(v.name);
            this.editcontactForm.get("newContacts")['controls'][0].get("company").setValue(v.company);
          }
        }
      });
      this.editcontactForm = this._formBuilder.group({
        newContacts: this._formBuilder.array([this.createContact()])
      });
      this.changecompany(this.company);
      this.ownersList = this.contactService.ownersList;
      this.contactService.contacts.subscribe(res=> this.allEmpsList = res);
      let allcontactList:any = [];
      let obj:any = {};
      this.contactOwnerList=[];
      for(let i=0; i < this.utils.contactList.length; i++){
        if(null != this.utils.contactList[i].contactOrg && 1 == this.utils.contactList[i].contactOrg.id ){
          this.contactOwnerList.push({id:this.utils.contactList[i].id, name:this.utils.contactList[i].name});
        }
      }
 
      if(this.utils.companiesList.length == 0){
        let serviceURL = this.utils.GETALLCOMPANY_URL;
        this.serviceCallProvider.callService(serviceURL,null,true).then(result => {
          let status = result[this.utils.SERVICE_CALL_STATUS];
          let output_data : any= result[this.utils.SERVICE_CALL_DATA];
          if(status===this.utils.STATUS_SUCCESS){
            this.companyList = output_data;
            this.utils.companiesList = output_data;
          } else {
            alert(result['message']);
          }
        });
      }
    }
  
  createContact() {
    var re = /^(([^<>()[\]\\.,!%;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return this._formBuilder.group({
      salutation: new FormControl(this.contactObj.salutation),
      name: new FormControl(this.contactObj.name),
      email: new FormControl(this.contactObj.email, [Validators.required,Validators.pattern(re)]),
      phone: new FormControl(this.contactObj.mobile, [Validators.required]),
      company: new FormControl(this.contactObj.contactOrg),
      designation: new FormControl(this.contactObj.designation),

      // role:new FormControl(this.contactObj.role),
      line: new FormControl(this.contactObj.address.line),
      country: new FormControl(this.contactObj.address.country),
      state: new FormControl(this.contactObj.address.state),
      city: new FormControl(this.contactObj.address.city),
      zipCode: new FormControl(this.contactObj.address.zipCode),
      isuser: new FormControl(this.contactObj.isuser),

      role: this._formBuilder.group({
        id: new FormControl(this.contactObj.role || ""),
        name: new FormControl("")
      }),
      contacttype: this._formBuilder.group({
        id: new FormControl(this.contactObj.contacttype || ""),
        name: new FormControl("")
      }),
      reportto: this._formBuilder.group({
        id: new FormControl(""),
        name: new FormControl(this.contactObj.reportto || "")
      }),
      address:this._formBuilder.group({
        line: new FormControl(this.contactObj.address.line),
        country:new FormControl(this.contactObj.address.country),
        state: new FormControl(this.contactObj.address.state),
        city: new FormControl(this.contactObj.address.city),
        zipCode: new FormControl(this.contactObj.address.zipCode),
      }),
      contactowner: this._formBuilder.group({
        id: new FormControl(""),
        name: new FormControl("")
      }),
      
    });


  }

  getCountryState(index, selectedval){
    this.utils.serviceURL = 'state/findbycountry/'+selectedval;
    this.utils.input = {
      "country": { "id": this.slectedCountry }
    };
  
      this.serviceCallProvider.callService(this.utils.serviceURL,this.utils.input,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
        if(status===this.utils.STATUS_SUCCESS){
          this.stateArr = output_data;
          this.slectedSate = localStorage.getItem('stateId');
          } else {
          alert(result['message']);
        }
      });
    
  }
  get contactsList() {
    return this.editcontactForm.get('newContacts') as FormArray;
  }
  checkSameContact(a, b) {
    return!a||a.id!==b;
  }
  checkNull(input) {

		if (input === undefined || input === "undefined" || input === null || input === "null" || input === 'NaN') {
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
			} else if ("number" == type.toLowerCase()) {
				if (isNaN(input)) {
					input = "";
				}
			}
		}

		return input;
  }
  change() {
   
  }

  changecompany(event) {
    let allcontactList:any = [];
    let id=  parseInt(event);

    this.reporttolist=[];
    for(let i=0; i < this.utils.contactList.length; i++){
      if(null != this.utils.contactList[i].contactOrg && id == this.utils.contactList[i].contactOrg.id ){
        this.reporttolist.push({id:this.utils.contactList[i].id, name:this.utils.contactList[i].name});
      }
    }

  }


  filterRows(value) {
    this.searchText = value;
  }
  selectedName(index, report) {

  
    this.reportsto=report.id;
    this.reportstoname=report.name;
    this.isReportToList=!this.isReportToList;
  }
  
  toggleShow(isTrue) {
    if(isTrue){
      this.isReportToList = true;
    }else {
      setTimeout(()=>{
        if(this.searchText == "" || this.reporttolist.filter(c => c.name == this.searchText).length > 0){
          this.isReportToList = false;
        }
      },150)
    }
  }

  updateContacts(){
    let userID:any = '';
    userID = localStorage.getItem('userID')

    this.error="";
      if(null == this.name ||  "" == this.name ){
        this.error="Name Required"; 
  
        return;
      } 
      if(null == this.email ||  "" == this.email ){
        this.error="Email Required"; 
   
        return;
      }

      if(null == this.designation ||  "" == this.designation ){
        this.error="Designation Required"; 
       
        return;
      }
      

      if(null == this.company ||  "" == this.company ){
         this.error="Company Required"; 
     
         return;
      }

  
      let input = {
        id:this.contactObj.id,
        email: this.email,
        mobile:this.phone,
        name:this.name ,
        designation:this.designation ,
        salutation: this.salutation,
        isActive: true,
        isUser: this.isuser,
        role:{
          id: this.role
        },
        address: {
          line: this.line,
          city: this.city,
          zipCode: this.zipCode,
          state: {
            id: this.slectedSate,
            name:"",
            country: {
              id:this.slectedCountry,
              name: ""
            }
          }
        },
        updatedBy :userID,
        contactorg: {
          id: this.company,
        },
        reportingto: {
          id: this.reportsto,
          name:""
        },
        contacttype: {
          id:this.contacttype ,
        },
        contactOwner:{
          id: this.contactowner,
          name: ""
        }
    }
    this.contactsComponent.updateContacts(input)
  }
  
}
