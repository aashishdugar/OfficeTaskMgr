import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isShowComp:boolean = false;
  isShowLoader:boolean = false;

  constructor(private emService: EventEmitterService, private contactsService: ContactsService) { 
    emService.sideWindow.subscribe(val=> {
      this.isShowComp=val.isTrue;
    });
    emService.loader.subscribe(val=>{
      this.isShowLoader = val;
    });
    emService.curPath.subscribe(path=> {
      this.curPath = path;
    });
  }
  isMenuExpand: boolean = false;
  curPath:string;
  showWindow:boolean = false;
  ngOnInit() {
  }
  
  menuExpand($event) {
    this.isMenuExpand = $event
  }

  closeWindow(){

  }
}
