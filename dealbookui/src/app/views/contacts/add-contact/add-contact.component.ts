import { Component, OnInit, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray  } from '@angular/forms';
import { EventEmitterService } from '../../../services/event-emitter.service';
import { ContactsService,Contact  } from '../../../services/contacts.service';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { ToastrService } from 'ngx-toastr';
import { ContactsComponent }from '../contacts.component'
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import { Utils } from '../../../providers/utils';
import { HttpClientModule, HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {


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
  error:string="";
  contCountry:any="";
  consalutation:any="";
  concompany:any="";
  reportingtoList:any=[];
  selectedFiles:any = '';
  currentFileUpload: any;
  serverUrl:any;
  contactOwnerList:any=[];
  companyList:any=[];
  isUser:boolean=false;
  @Input("contact") set contact(contact){
    if(this.title == 'Edit Contact' && contact) {
      this.editObject = {...contact}
      this.searchText = contact.reportto && contact.reportto.name;
        this.contactObj = {
            name:contact.name,
            salutation:contact.salutation,
            email:contact.email,
            mobile:contact.mobile,
            designation:contact.designation,
            role:contact.role.id && contact.role.id,
            reportto: contact.reportingto && contact.reportingto.name ,
            contactOrg:contact.contactOrg  && contact.contactOrg.id,
            contacttype:contact.contacttype && contact.contacttype.id,
            contactowner:contact.contactowner && contact.contactowner.id,
            isuser:contact.isuser,
            address:contact.address  
          
        };
        if(null == this.contactObj.address || undefined == this.contactObj.address){
          this.contactObj.address={
            line:"",
            country:"",
            state:"",
            city:"",
            zipCode:"",
          };
        }
        this.contactsList.reset();
        this.addNewContact();
    }
  };
  allEmpsList:Contact[];
  contactObj = {
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
  contactForm: FormGroup;
  constructor(public ContactsComponent:ContactsComponent,public http: HttpClient,private toastr:ToastrService,private serviceCallProvider:FetchServerDataProvider,private utils:Utils,private _formBuilder: FormBuilder, private contactService: ContactsService, private emService : EventEmitterService) {
  }
  ngOnInit(): void {
    this.utils.roleList = JSON.parse(localStorage.getItem('staticRoleData'));
    this.utils.contactTypeList= JSON.parse(localStorage.getItem('staticContactTypeData'));
    this.companyList=this.utils.companiesList;

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
    };
    this.utils.countryList= JSON.parse(localStorage.getItem('countryListArr'));
  
    this.emService.createContact.subscribe(v=> {
      if(v && this.title !== 'Edit Contact'){
        this.contactService.getHierarchyFlag(true);
        this.contactObj.contactOrg = v.company;
        this.contactObj.reportto = v.name;
        if(this.contactForm){
          this.contactForm.get("newContacts")['controls'][0].get("reportto").get("id").setValue(v.id);
          this.contactForm.get("newContacts")['controls'][0].get("reportto").get("name").setValue(v.name);
          this.contactForm.get("newContacts")['controls'][0].get("company").setValue(v.company);
        }
      }
    });

    this.contactForm = this._formBuilder.group({
      newContacts: this._formBuilder.array([this.createContact()])
    });
    this.ownersList = this.contactService.ownersList;
    this.contactService.contacts.subscribe(res=> this.allEmpsList = res);
    let allcontactList:any = [];
    let obj:any = {};
    allcontactList =JSON.parse(localStorage.getItem('contactlist')); 
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
  change() {
  
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
    this.utils.countryList= JSON.parse(localStorage.getItem('countryListArr'));
    
    for(let i=0;i<this.utils.countryList.length;i++){

      if(this.utils.countryList[i].id == selectedval){
        this.stateArr[index] = this.utils.countryList[i].stateList
      }
    }
  }
  get contactsList() {
    return this.contactForm.get('newContacts') as FormArray;
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
  
  checkNullArray(input) {
		if (input === undefined || input === null || input.length == 0) {
			input = [];
		}
		return input;
	}
  changecompany(index, event) {
    let allcontactList:any = [];
    let id=  parseInt(event);
    this.reporttolist=[];
    for(let i=0; i < this.utils.contactList.length; i++){

      if(null != this.utils.contactList[i].contactOrg && id == this.utils.contactList[i].contactOrg.id ){
        this.reporttolist.push({id:this.utils.contactList[i].id, name:this.utils.contactList[i].name});
      }
    }
   
  }

  selectedName(index, emp) {
    this.contactsList.at(index).get("reportto").get("name").setValue(emp.name);
    this.contactsList.at(index).get("reportto").get("id").setValue(emp.id);
    this.isReportToList = !1;
  }
  addNewContact() {
    this.contactsList.push(this.createContact());
  }
  
  removeNewContact(index) {
    this.contactsList.removeAt(index);
    if(!this.contactsList.length){
      this.closeAddContact.emit();
    }
  }
  ngOnDestroy() {
    this.emService.addContact(null);
  }
  getContactDetails(contact, type, prop) {
    let c = this.contactService.getContacts().filter(c=>c[prop] == contact[type][prop]);
    c.length > 0 ? contact[type] =  c[0] : delete contact[type];
  }

  deleteProperty(contact, type) {
    delete contact[type];
    this.title == 'Edit Contact' && this.editObject && this.editObject[type] && delete this.editObject[type];
    return true;
  }
  
  onSubmit() {
    let allEmails = this.contactService.getemailsList();
    let duplicateEmailsList = [];
    let list = []
     list = this.contactForm.value.newContacts.map((contact) => {

      return contact;
    });
    if(this.title !== 'Edit Contact' && duplicateEmailsList.length > 0) {
      alert(`${duplicateEmailsList.toString()} are already exists.`)
      return false;
    }
    if(this.title == 'Edit Contact') {
      list= [{...this.editObject, ...list[0]}];
      this.updateContacts(list)
    }
    let userID:any = '';
    userID = localStorage.getItem('userID')
    
    let contactInput = [];
    for (let i=0;i<list.length;i++){

    let contactElement = list[i];
    this.error="";
      if(null == contactElement.name ||  "" == contactElement.name ){
        this.error="Name Required"; 
     
        return;
      } 
      if(null == contactElement.email ||  "" == contactElement.email ){
        this.error="Email Required"; 
     
        return;
      }

      if(null == contactElement.designation ||  "" == contactElement.designation ){
        this.error="Designation Required"; 
    
        return;
      }
      

      if(null == contactElement.company ||  "" == contactElement.company ){
         this.error="Company Required"; 
        
         return;
      }
     
       let contactInputObj ={
          id:contactElement.id,
          email: contactElement.email,
          mobile:contactElement.phone,
          name:contactElement.name ,
          designation:contactElement.designation ,
          salutation: contactElement.salutation,
          isActive: true,
          isUser: contactElement.isuser,
          role:contactElement.role,
          address: {
            line: contactElement.line,
            city: contactElement.city,
            zipCode: contactElement.zipCode,
            state: {
              id: contactElement.state,
              name:"",
            country: {
              id:contactElement.country,
              name: ""
            }
          }
        },
        contactorg: {
          id: contactElement.company
        },
        createdBy:userID,
        reportingto: contactElement.reportto ,
        contactType: contactElement.contacttype ,
        contactOwner:contactElement.contactowner
      }
      

      contactInput.push(contactInputObj)
    }

    
    this.addContacts(contactInput);
    this.contactForm.reset()
    this.closeAddContact.emit();
  }
  addContacts(input){

    this.ContactsComponent.createContact(input)
  }
  updateContacts(input){
      this.serviceCallProvider.callService(this.utils.UPDATECONTACT_URL,input,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
       
        if(status===this.utils.STATUS_SUCCESS){
         
          this.utils.contactList = output_data
          this.totalCount =""
          this.totalCount =this.utils.contactList.length
  
        } else {
         
           this.toastr.error(result['msg']);
        }
      });
  }
  closeCreateWindow($event) {
    this.closeAddContact.emit();
  }
  selectedOwner(owner, index) {

    this.contactsList.at(index).get("contactowner").get("name").setValue(owner.name);
    this.contactsList.at(index).get("contactowner").get("id").setValue(owner.id);
  }


  /* File Upload Start here */
  storeData: any;
  csvData: any;
  jsonData: any;
  textData: any;
  htmlData: any;
  fileUploaded: File;
  worksheet: any;
  labelTitle = "Choose file";
  element;
  uploadedFile(event) {
    this.fileUploaded = event.target.files[0];
    // this.element = event.target;
   this.labelTitle = this.fileUploaded.name;
    this.selectedFiles = event.target.files;
 
  }
  submitFile(event) {
    this.labelTitle = "Choose file";
   this.utils.isLoadingSpin = true;
     this.pushFileToStorage(this.fileUploaded).subscribe(event => {
      
      if (event['body'] != undefined) {
        let output = event['body'];
        output = JSON.parse(output);
        if (output.status == "SUCCESS") {
          this.utils.isLoadingSpin = false;
      
        this.contactService.contactsToAdd.next(output.data);
          for(let i=0; i<output.data.length;i++){

            this.utils.contactList.push(output.data[i])
          }
        } else {
          this.toastr.error(output.errormsg); 
          this.utils.isLoadingSpin = false;
        }
      }
    });
  this.selectedFiles = undefined;
  }

  
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
   
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    
    let serviceURL = this.utils.CONTACTIMPORT_URL;
    this.serverUrl = '/dealbookback/';
    const req = new HttpRequest('POST',this.serverUrl+serviceURL, formdata, {
        reportProgress: true,
        responseType: 'text'
    });

    return this.http.request(req);
}

  validateData(jsonData) {
    let reportToList = [];
    let contactsList =[];
    let user = this.contactService.getUser();
    let allContacts = this.contactService.getContactsList();
    let allEmails = this.contactService.getemailsList();
    let data = {};
    jsonData.forEach((contact, index) => {
    
      contact.name = contact.name;
      contact.contactowner = user;
      contact.reportingto = {
        id: index,
        name: contact.reportTo
      }
      contact.isuser = contact.isuser == "TRUE"? true : false;
      reportToList.push(contact.reportTo);
      contactsList.push(contact.name);
      delete contact.name;
      // delete contact.lastName;
      delete contact.reportTo;
      // delete contact.contactownerName;
      return data[contact.name] =  contact;
    })
    reportToList = [new Set(reportToList)];
    let list=[];
    let modifiedData = [];
    let reportToINExcel = [];
    let notfound = [];
    let found = [];
    reportToList.forEach(val=> {
      if(data[val]) {
        // reportToINExcel.push(data[val]);
        modifiedData.push(data[val]);
      }else if(allContacts.indexOf(val) || val == user['name']){
        found.push(val);
      }else{
        notfound.push(val);
      }
    })
    if(notfound.length > 0) {
      alert(`Not Found , ${notfound.toString()}`);

    }else {
      let newList = [];
      let tempList = [];
      modifiedData.forEach(c=> {
        if( reportToList.indexOf(c.reportto.name ) > -1 && tempList.indexOf(c.reportto.name ) == -1 && c.reportto.name !== user['name']) {
          tempList.push(c.reportto.name);
          newList.push(data[c.reportto.name]);
        }
      });
      let mergeArray = [...newList, ...modifiedData, ...(Object.values(data))];
      let keys = ['email'];
      let filtered = mergeArray.filter(
        (s => o =>
          (k => !s.has(k) && s.add(k))
            (keys.map(k => o[k]).join('|'))
        )
          (new Set)
      );

      let finalList = filtered.filter(c=>{
        return allEmails.indexOf(c.email) == -1;
      })
  
    this.contactService.addContacts(filtered);
  
    }
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

  filterRows(value) {
    this.searchText = value;
  }

}
