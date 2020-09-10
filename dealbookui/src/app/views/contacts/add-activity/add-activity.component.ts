import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { Utils } from '../../../providers/utils';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {


  constructor(private toastr:ToastrService,private utils:Utils,private serviceCallProvider:FetchServerDataProvider,private contactServicce : ContactsService) { }
  @Input('addActivity') activity;
  @Input('contact') contact;
  @Input('index') index;
  @Input('type')type;
  @Output('submitActivity') submitActivity = new EventEmitter<any>();
  @Output('removeActivity') removeActivity = new EventEmitter<any>();
  @Output('addedActivity') addedActivity = new EventEmitter<any>();
  isFollowUp = null;
  ngOnInit(): void {
  }
  
  Register(regForm:NgForm){  
  }
  getFollowupDate(event, activity) {
  }
  activitySubmit(activity, index) {
    let userID:any = '';
    let userName:any = '';
    userID = localStorage.getItem('userID')
    userName = localStorage.getItem('userName')
   
    let activityInput = {
      "note": activity.subject,
      "isFollowup": activity.isFollowup, 
      "followupDate":activity.fallowup,
      "isActive": true,
      "contact": this.contact,
      "createdBy":userID,
      "createdByName":userName,
      "parent": null,
      "type": {
        "id": activity.activityType,
      }
    }

    this.addActivity(activityInput);
  }
  addActivity(input){

      this.serviceCallProvider.callService(this.utils.CREATEACTIVITY_URL,input,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
       

        if(status===this.utils.STATUS_SUCCESS){

        for(let i=0; i < this.utils.contactList.length; i++){
          if(this.utils.contactList[i].id == this.contact.id){
            this.utils.contactList[i].activities.push(output_data);
            let length=this.utils.contactList[i].activities.length -1;
            let element=this.utils.contactList[i].activities[length];
          
          }
        }
        } else {
           this.toastr.error(result['errormsg']);
        }
      });

  }

  activityUpdate(activity, index){
    let userID:any = '';
    let userName:any = '';
    userID = localStorage.getItem('userID')
    userName = localStorage.getItem('userName')
    let createdBy = localStorage.getItem("actittContact");
   
    let activityInput = {}
    if(activity.isFollowup == false){
      activityInput = {
       "id":activity.id,
       "note": activity.subject,
       "isFollowup": activity.isFollowup, 
       "followupDate":null,
       "isActive": true,
       "contact": this.contact, 
       "updatedBy":userID,
       "updatedByName":userName,
       "parent": null,
       "type": {
         "id": activity.activityType,
         
         
       }
     }
    }else{
      activityInput = {
      "id":activity.id,
      "note": activity.subject,
      "isFollowup": activity.isFollowup, 
      "followupDate":activity.fallowup,
      "isActive": true,
      "contact": this.contact, 
      "updatedBy":userID,
      "updatedByName":userName,
      "parent": null,
      "type": {
        "id": activity.activityType,
      }
    }


    }
    this.serviceCallProvider.callService(this.utils.UPDATEACTIVITY_URL,activityInput,null).then(result => {
      let status = result[this.utils.SERVICE_CALL_STATUS];
      let output_data : any= result[this.utils.SERVICE_CALL_DATA];
     
      if(status===this.utils.STATUS_SUCCESS){
        for(let i=0; i<this.contact.activities.length; i++){
          for(let i=0; i < this.utils.contactList.length; i++){
            if(this.utils.contactList[i].id == this.contact.id){
              let contactActivityList=this.utils.contactList[i].activities;
              for(let j=0; j < this.utils.contactList[i].activities.length; j++){
                if(activity.id == this.utils.contactList[i].activities[j].id){
                    this.utils.contactList[i].activities[j]=output_data;
                }
              }
            }
          }
        }

      } else {
         this.toastr.error(result['errormsg']);
      }
    });
  }
  activityRemove(activity,index) {
    this.removeActivity.emit({activity,index});
  }
  isFollowupDate($event) {

  }
  isFollow(isChecked, isDate) {
    if(!isChecked || (isChecked && isDate.length > 0)) return true;
    return false;
  }
}
