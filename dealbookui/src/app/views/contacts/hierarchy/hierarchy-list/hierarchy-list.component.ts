
import {  Component, OnInit, Input, Output, EventEmitter, OnDestroy, AfterViewChecked  } from '@angular/core';
import { EventEmitterService } from '../../../../services/event-emitter.service';
import { ContactsService,  } from '../../../../services/contacts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-hierarchy-list',
  templateUrl: './hierarchy-list.component.html',
  styleUrls: ['./hierarchy-list.component.css']
})
export class HierarchyListComponent implements OnInit {

  @Input() employee;
  @Input() hasManager;
  @Output() isShowChild = new EventEmitter<any>();
  isShow = true;
  numOfActTypes;
  active;
  activeSub : Subscription;
  sideWindow : Subscription;
  constructor(private cs : ContactsService, private emService: EventEmitterService) { 
     this.hasManager = false;
  }

  ngOnInit() {
    // console.log(this.employee);
    this.updateActivitiesCount(this.employee.activities);
    this.activeSub = this.emService.openrow.subscribe(c=>{
      this.active = c;
    });
    this.sideWindow = this.emService.sideWindow.subscribe(v=> {
      this.active = null;
    });
    this.emService.updateActivity.subscribe(()=>{
      this.updateActivitiesCount(this.employee.activities);
    })
  }

  clicked($event) {
    this.emService.setOpenRow(this.employee.id);
    // console.log(this.employee);
      // this.employee.subordinates.push();
  }
  showHide($event) {
    if(this.employee.subordinates){
      this.isShow = !this.isShow;
      this.isShowChild.emit(this.isShow);
    }else {
      let list = this.cs.getContacts().filter(c=> c['reportto'] && c['reportto'].id == this.employee.id);
      if(list.length > 0) this.employee.subordinates =list;
    }
  }
  addContact($event) {
    this.emService.addContact(this.employee);
    $event.stopPropagation();
  }
  updateActivitiesCount(list) {
    this.numOfActTypes = {
      Email : 0,
      Call : 0,
      Meeting: 0
    };
    list.forEach(a=>{
      this.numOfActTypes[a.activityType] = this.numOfActTypes[a.activityType]+1
    })
  }
  ngOnDestroy() {
    this.activeSub.unsubscribe();
    this.sideWindow.unsubscribe();
  }
}
