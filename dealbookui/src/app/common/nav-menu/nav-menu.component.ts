import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  submenuShowHide = {
    contacts: false,
    dashboard: false,
    sales: false,
    reports: false,
    commissions: false,
    deals: false
  }
  @Input('isMenuExpand') isMenuExpand:boolean;
  @Input('curPath') set curPath(value: string) {
    this.setActiveMenu(value, true);
  };
  constructor() { }

  ngOnInit() {
  }
  showSubmenu($event) {
    let curState = this.submenuShowHide[$event] ? false:true;
    this.setActiveMenu($event, curState);
  }
  clickOutside(){
    // this.hideAllSubMenu();
  }
  hideAllSubMenu(){
    Object.keys(this.submenuShowHide).forEach( (item) => this.submenuShowHide[item] = false );
  }
  setActiveMenu(path, curState) {
    this.hideAllSubMenu();
    this.submenuShowHide[path] = curState;
  }

}
