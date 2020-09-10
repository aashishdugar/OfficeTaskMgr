import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import { DayPickerComponent } from 'ngx-bootstrap/datepicker/public_api';
import { EventEmitterService } from '../../../services/event-emitter.service';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { Utils } from '../../../providers/utils';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  @Output() addActivity = new EventEmitter<any>();
  @Input('contact') contact;
  constructor(private toastr:ToastrService,public utils:Utils,private serviceCallProvider:FetchServerDataProvider,private contactsService: ContactsService, private emService: EventEmitterService) { }
  activeTab: string= 'activies'; 
  addActive = false;
  editActivety = false;
  isUpdate= false;
  addActivites = [];
  activityList: any[] = [];
  editIndex = null;
  activetyType = null;
  FollowUpList:any[] = [];

  numOfActTypes:any = {};
    
  ngOnInit() {

    if(null != this.contact.activities){
      this.activityList = this.contact.activities;
    }
    if(this.contact.address !== null){
      localStorage.setItem("countryId",this.contact.address.state.country.id)
      localStorage.setItem("stateId",this.contact.address.state.id)
    }
    this.numOfActTypes.Email=this.contact.emailCount;
    this.numOfActTypes.Call=this.contact.callCount;
    this.numOfActTypes.Meeting=this.contact.meetingCount;
    this.numOfActTypes.Text=this.contact.textCount;

 
  }
  updateActivitiesCount(list) {
    this.numOfActTypes = {
      Email : 0,
      Call : 0,
      Meeting: 0,
      Text:0
    };
    list.forEach(a=>{
      this.numOfActTypes[a.activityType] = this.numOfActTypes[a.activityType]+1
    })
  }
  activeView(activeTab){
    this.activetyType && !confirm("Do you want to discard '"+this.activetyType+"' activity") || ( this.addActivites=[],this.editActivety = false,this.activeTab = activeTab, this.activetyType=null)
  }
  addActivities(){
    this.addActivites.push({
      activityType: '',
      isFollowup: false,
      fallowup : this.setDate(),
      subject: ''
    })
    this.activetyType = "Add";
  }
  setDate() {
    let nexWeekDay = new Date();
    let dayOfWeek = nexWeekDay.getDay() >=5 ? (7 - nexWeekDay.getDay())+1 : 1;
    nexWeekDay.setDate(nexWeekDay.getDate() + dayOfWeek);
    return nexWeekDay;
  }
  submitActivity({activity, index}) {
    let user = this.contactsService.getUser();
    this.addActivites.splice(index, 1);
    if(activity.isFollowup) {
      let today = new Date();
      activity.fallowUp = {
        fallowUpDate : new Date(activity.fallowup).toISOString()
      };
    }else{
      delete activity.fallowUp;
    }
    delete activity.isFollowup;
    delete activity.fallowup;
    let saveActivety = activity;
    saveActivety.contactName = this.contact.name;
    saveActivety.updateBy = user['name'];
    this.editActivety = false;
    this.activetyType = null;

    this.contactsService.addActivity(this.contact.id, saveActivety)
    .subscribe(data=>{
      this.emService.updateActivities();
    }, e=> console.log(e));
  }
  
  closeAddContact(event) {
    // this.isCreateContact = false;
  }

  addedActivity(inputactivity){
    if(null != inputactivity && null != inputactivity.type && null != inputactivity.type.name){
      let acttype=inputactivity.type.name;
      
      if(acttype == "Meeting"){
        this.contact.meetingCount=this.contact.meetingCount+1;
      }
      if(acttype == "Call"){
        this.contact.callCount=this.contact.callCount+1;
      }
      if(acttype == "Email"){
        this.contact.emailCount=this.contact.emailCount+1;
      }
      if(acttype == "Text"){
        this.contact.textCount=this.contact.textCount+1;
      }

    }
  }
 

  removeActivity(index) {
    this.addActivites.splice(index, 1);
    this.editActivety = false;
  }
  deleteActivity(index,id) {
  
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Activity',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
            this.serviceCallProvider.callService(this.utils.DELETEACTIVITY_URL+'/'+id,null,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
       
        if(status===this.utils.STATUS_SUCCESS){
          let empIndex = this.activityList.findIndex(el => el.id == id);
          let deletedActivity=this.activityList[empIndex];
          let acttype=deletedActivity.type.name;
      
          if(acttype == "Meeting"){
            this.contact.meetingCount=this.contact.meetingCount-1;
          }
          if(acttype == "Call"){
            this.contact.callCount=this.contact.callCount-1;
          }
          if(acttype == "Email"){
            this.contact.emailCount=this.contact.emailCount-1;
          }
          if(acttype == "Text"){
            this.contact.textCount=this.contact.textCount-1;
          }
          this.activityList.splice(empIndex, 1);
  
        } else {
           this.toastr.error(result['errormsg']);
           
        }
      });
        Swal.fire(
          'Deleted!',
          'Your Activity has been deleted.',
          'success',  
        )
      } 
    })
   
  }
  editActivity(index) {
   
    this.activetyType = "Edit";
    this.editActivety = true;
    let activty = JSON.parse(JSON.stringify(this.activityList[index]));
    let activityInput = {
      activityType:activty.type.id,
      isFollowup: activty.isFollowup,
      fallowup: activty.followupDate,
      subject: activty.note,
      id:activty.id,
      contact:this.contact
  
    }
    activty.isFollowup = activty.fallowup && activty.fallowup.followupDate ? true : false;
   
    activityInput.fallowup = activty.isFollowup && (new Date(activty.fallowup.followupDate)) || this.setDate();
    this.addActivites = [(Object.assign({}, activityInput))];
  }


}
