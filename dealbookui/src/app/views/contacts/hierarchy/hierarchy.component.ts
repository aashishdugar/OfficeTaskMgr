import { Component, OnInit, Renderer2, HostListener, OnDestroy, ViewChild, ElementRef, Input, ViewContainerRef, ViewChildren, QueryList } from '@angular/core';
import { EventEmitterService } from '../../../services/event-emitter.service';
import { ContactsService,  } from '../../../services/contacts.service';
@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {
  @Input() topEmployee;
  @Input() hasManager;
  constructor(private cs: ContactsService, private emService: EventEmitterService) { 
    this.hasManager = false;
  }
  isshow = true;
  ngOnInit(): void {
    if(this.cs.getHierarchyflag) {
      this.topEmployee = this.topEmployee || this.cs.getHierarchyList();
      // this.cs.getHierarchyFlag(false);
    }
  }

  isShowChild($event) {
    this.isshow = $event;
  }
  
  clicked(nodeData) {
    this.emService.setOpenRow(nodeData.id);
    // alert(`Hi All. I'm ${nodeData.name}. I'm a ${nodeData.id}.`);
  }
  
  getData(list, type) {
    let count = 0;
    list.activities.forEach(a=>{
      if(a.activityType ==  type) {
        count++;
      }
    })
    return count;
  }
  
  
  addContact(employee, $event) {
    this.emService.addContact(employee);
    $event.stopPropagation();
  }
  
  showChildren(employee, $event) {
    let list = this.cs.getContacts().filter(c=> c['reportto'] && c['reportto'].id == employee.id);
    list.length > 0 ? employee["children"] =list : alert(`No reporties to "${employee.name}"`);
  
    $event.stopPropagation();
  }
  
}
