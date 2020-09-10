import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService} from "../../shared/services/auth.service"
import { EventEmitterService } from '../../services/event-emitter.service';
import { ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  isShowComp:boolean = false;
  isShowLoader:boolean = false;
 
  Username:any = '';
  constructor(public authService: AuthService,public emService: EventEmitterService, private contactsService: ContactsService){

    emService.sideWindow.subscribe(val=> {
      this.isShowComp=val.isTrue;
    });
  }
  ngOnInit(): void {

this.Username = localStorage.getItem('userName');
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
