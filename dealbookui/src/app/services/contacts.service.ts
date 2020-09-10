import { Injectable,NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ContactsModel} from '../model/contacts.model';
import { EventEmitterService } from '../services/event-emitter.service';
import { ToastrService } from 'ngx-toastr';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { Utils } from 'src/app/providers/utils';
import { Title } from '@angular/platform-browser';

const EventSource:any = window['EventSource'];

export interface Contactowner {
  id: number | string,
  name: string
}

export interface Address {
  line: number | string,
  city: string,
  zipCode: number,
  state: {
    id: number,
    name: string,
    country: {
      id:number
      name:string
    }
  }
}
// export interface Contact {
//   id: number | string,
//   email: string,
//   phonenumber: number | string,
//   contactowner: Contactowner,
//   lastactivitydate: string,
//   creationdate: string,
//   company: string,
//   isuser: boolean,
//   name: string,
//   activities: []
// }

export interface Contact {
  id: number | string,
  email: string,
  phonenumber: number | string,
  contactowner: Contactowner,
  lastactivitydate: string,
  creationdate: string,
  contactOrg:{
    id:number ,
    name:string

  },
  role:{
    id:number ,
    name:string
  },
  isuser: boolean,
  name: string,
  activities: []
}




interface DataStore {
  contacts: Contact[],
  ownersList:Contact[],
  activities : any[],
  contactsList: any[],
  emailsList: any[],
  reportTo: any[]
}
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _contacts = new BehaviorSubject<Contact[]>([]);
  private _ownersList = new BehaviorSubject<Contact[]>([]);
  private _activities = new BehaviorSubject<any[]>([]);
  private _displayColumns = new BehaviorSubject<any[]>([]);
  contactsToAdd= new BehaviorSubject<Contact[]>([]);
  private dataStore: DataStore  = { 
    contacts: [], 
    ownersList:[],
    activities: [],
    contactsList:[],
    emailsList:[],
    reportTo:[]

   };
   public contactId = null;
   readonly contacts = this._contacts.asObservable();
   readonly ownersList = this._ownersList.asObservable();
   readonly activities = this._activities.asObservable();
   readonly displayColumns = this._displayColumns.asObservable();
   private api;
   private updateContact : boolean = false;
   public getHierarchyflag = false;
   public hierarchyList = [];
   private loggedInUser : Contact;
   private defaultWidgets: any = [{widgetName: "Activites", widgetCriteria: "activities", data: []}, {widgetName: "Contacts", widgetCriteria: "contacts", data: []}];
   private widgets:any= [];
  constructor(private serviceCallProvider:FetchServerDataProvider,public utils:Utils,private http: HttpClient,private zone:NgZone, private emService: EventEmitterService, private toastr: ToastrService) {
  emService.showHideLoader(true);
  this.api = new ContactsModel().API_END_POINTES;
  this._displayColumns.next(new ContactsModel().TABLE_COLUMNS);
}
  getHierarchyList() {
    return this.hierarchyList;
  }
  getWidgets() {
    return this.widgets;
  }
   /**********  Set Methods  **********/
   addContacts(params, eventType?) {
    let message = "New contact add successfully";
    if(eventType) {
      this.updateContact = true;
      message = "Contact updated successfully";
    }
    return this.http.post(this.api.createContact, params).subscribe(data=>{
      this.toastr.success(message);
      // this.loadContacts();
    });
  }
  setcontactId(contactId) {
    this.contactId = contactId;
  }
  getHierarchyFlag(isBoolean) {
    this.getHierarchyflag = isBoolean;
  }
  updateColumns(data) {
    this._displayColumns.next(data);
  }
  getUser() {
    return this.loggedInUser;
  }
    /**********  Get Methods  **********/
    getContacts() {
      return this._contacts.value;
    }
  
    getContactsList() {
      return this.dataStore.contactsList;
    }
  
    getemailsList() {
      return this.dataStore.emailsList;
    }
    setHierarchyList(list) {
      this.hierarchyList = list[0];
    }
    
  addActivity(contactId, params) {
    return this.http.post(this.api.addActivity + contactId, params).pipe(map(data => {
      let message = "Activity added successfully";
      this.toastr.success(message);
    }));
    // .subscribe(data=>{
    //   this.dataStore.activities.unshift(params);
    //   this._activities.next(this.dataStore.activities);
    // }, e=> console.log(e));
  }
    deleteData(type, id) {
      return this.http.get(this.api[type] + id).pipe(map(data => {
        let message = "Activity deleted successfully";
        if("deleteContact" == type){
          message = "Contact deleted successfully";
        }
        this.toastr.success(message);
        // if("deleteContact" == type){
        //   let index = this.dataStore.contacts.findIndex(c=> c.id == id);
        //   this.dataStore.contacts.splice(index, 1);
        //   this.updateDataStore(this.dataStore.contacts);
        // }
        // console.log(data);
      }));
    }

    addWidget(widget, data?) {
      // this.widgets.unshift({...widget, data : data});
      return this.http.post(this.api.createWidget, widget).pipe(map(data => {
        // console.log(data);
          let message = "Widget created successfully";
          data['data'] = this.filterWidgets(data).length > 0 ? this.filterWidgets(data): alert("No data Available");
          //this.widgets.unshift(data);
          this.utils.widgets.unshift(data);
          // console.log("this.utils.widgets "+this.utils.widgets);
          this.toastr.success(message);
      }),catchError(err => {
        this.toastr.error(err.error);
        return throwError(err);
    }));
      // this.widgets.unshift({...widget, data : this.filterWidgets(widget)});
    }

    createNewWidget(input,data?){

      this.serviceCallProvider.callService(this.utils.CREATEWIDGET_URL,input,true).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
       
        if(status===this.utils.STATUS_SUCCESS){
        let data:any = {}
          this.toastr.success(result['msg']);
        
     data = output_data
     data['data'] 
          //this.widgets.unshift( output_data);
          this.utils.widgets.unshift(output_data);
          this.emService.updateWidgits();
          // console.log("widgets "+JSON.stringify(this.widgets))
          // console.log("output "+JSON.stringify(output_data));
      
      
        } else {
         
          alert(result['message']);
        }
      });
  
  
    }

    filterWidgets(widget) {
      let d = this.dataStore[widget.widgetCriteria.toLowerCase()].filter(ele=>{
        let a = [];
          for (let [key, value] of Object.entries(widget)) {
            if(key !== "widgetName" && key != "widgetCriteria" && key != "data" && key != "id" && key != "uid") {
              if(typeof ele[key] == "object") {
                if(key.endsWith('fallowUp'))  {
                  this.validateData(value, ele[key], "followUpDate", a);
                }else {
                  this.validateData(value, ele[key], "name", a);
                }
              }else {
                this.validateData(value, ele, key, a);
                  // let list = value && value['split'](",");
                  // if(list != undefined) {
                  //   a.push(list.some(v=> ele[key] == v))
                  // } else {
                  //   a.push(false);
                  // }
              }
            }
          }
          return a.every(Boolean);
      })
      return d;
    }

    validateData(value, ele, key, a) {
      let list = value && value['split'](",");
      if(list != undefined) {
        if((key.toLowerCase()).endsWith('date')) {
          if(key == "followUpDate"){
            if(ele['fallowUp']) {
  
              let today = new Date().setHours(0,0,0,0);
              let followUpDateFromDB = new Date(ele['fallowUp']['fallowUpDate']).setHours(0,0,0,0);
              let filterOption = list[0];
              let fDate = Number(list[1]);
              let followUpDateFromFilter = new Date(fDate).setHours(0,0,0,0);
              // console.log("Follow Up Filter: ", filterOption);
              if (filterOption == "Today" || filterOption == "Tomorrow") {
                a.push(followUpDateFromFilter == followUpDateFromDB);
              } else {
                a.push(followUpDateFromFilter >= followUpDateFromDB && today < followUpDateFromDB);
              }
            }else {
              a.push(false);
            }
          }else{
            a.push(list.some(v=> new Date(ele[key]).getTime() >= v));
          }
        }else {
          a.push(list.some(v=> ele[key] == v));
        }
      } else {
        a.push(false);
      }
    }
}
