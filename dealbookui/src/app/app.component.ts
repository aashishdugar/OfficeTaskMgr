import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ActivationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { EventEmitterService } from './services/event-emitter.service';
import { Utils } from './providers/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dealBook-app';
  time = new Date('2019-10-23T12:54:09.285+0000');
  isLoginPage:boolean
  showNav:boolean;
  login:boolean;
  isShowComp:boolean = false;
  curPath:string;
  constructor(public utils: Utils,private router: Router, private location: Location, private route: ActivatedRoute, private emService: EventEmitterService){
    router.events.subscribe(event=>{
      if (event instanceof NavigationEnd ) {
        emService.setCurPath(event.urlAfterRedirects.split("/")[2]);
      }
    });

    emService.sideWindow.subscribe(val=> {
      this.isShowComp=val.isTrue;
    });

  }

  isMenuExpand: boolean = false;

  showWindow:boolean = false;

  

  menuExpand($event) {
    this.isMenuExpand = $event
  }


  
}
