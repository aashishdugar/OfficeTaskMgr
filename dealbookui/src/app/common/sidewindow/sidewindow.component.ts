import { Component, OnInit, Output, EventEmitter, ComponentFactoryResolver, ViewChild, AfterViewInit, Input, ElementRef } from '@angular/core';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';
import { EventEmitterService } from '../../services/event-emitter.service';
import { DynamicComponentDirective } from './dynamic-component.directive';
//import { ColumnListComponent } from '../column-list/column-list.component';
//import { HierarchyComponent } from 'src/app/views/contacts/hierarchy/hierarchy.component';
import { ContactsService } from '../../services/contacts.service';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { Utils } from 'src/app/providers/utils';
import { ToastrService } from 'ngx-toastr';
//import { jobs } from 'node_modules.backup/@angular-devkit/core/src/experimental';
@Component({
  selector: 'app-sidewindow',
  templateUrl: './sidewindow.component.html',
  styleUrls: ['./sidewindow.component.css'],
  animations: [
    trigger('slideMenu', [
      state('true', style({
        transform: 'translateX(0px)'
      })),
      state('false', style({
        transform: 'translateX(-20px)'
      })),
      transition('false => true', animate('400ms ease-in-out')),
      transition('true => false', animate('400ms ease-in-out')),
    ])
  ]
})
export class SidewindowComponent implements OnInit, AfterViewInit {
  title="";
  isShowComp = false;
  animate= false;
  className="";
  windowMinimize = false;
  tempStyle="";
  data:any = '';
  cilick:boolean;
  id:any = '';
  @ViewChild(DynamicComponentDirective, {static:true}) dynamicHost: DynamicComponentDirective;
  @ViewChild("window", {static:true}) window: ElementRef;
  dynamicComponent:any;
  constructor(public toastr:ToastrService,public utils:Utils,public serviceCallProvider:FetchServerDataProvider,private emService: EventEmitterService, private cf: ComponentFactoryResolver, private ctService: ContactsService) {
    emService.sideWindow.subscribe(val=> {
      this.isShowComp = val.isTrue;
      this.className= val.component && val.component.name.toLowerCase();
      this.dynamicComponent = val.component;
      this.title = val.title;
    });
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    setTimeout(()=>{
      this.loadComponent();
    })
  }

  getAllDataHierarchy(id,name){
    this.utils.name = name;
    this.utils.id = id;
      this.serviceCallProvider.callService(this.utils.GETHIERARCHY_URL+'/'+id,null,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];

        if(status===this.utils.STATUS_SUCCESS){
          this.utils.ds = {};
          this.utils.ds =output_data;



        } else {
           this.toastr.error(result['msg']);
        }
      });


  }

  collapseHierachy(){
    this.cilick = true;
    let childArr:any = []
    let buchildArr:any = [];

      for (let j = 0; j < this.utils.ds.children.length; j++) {
        childArr = this.utils.ds.children[j];

        let obj ={
          "name": childArr.name,
          "id":childArr.id,
          "parentContactId": childArr.parentContactId,
          "title":childArr.title,
          "callCount":childArr.callCount,
          "emailCount": childArr.emailCount,
          "meetingCount":childArr.meetingCount,
          "textCount":childArr.textCount,
        }
          buchildArr.push(obj);
      }


    this.data = {
      "name": this.utils.ds.name,
      "id": this.utils.ds.id,
      "title": this.utils.ds.title,
      "callCount": this.utils.ds.callCount,
      "emailCount":this.utils.ds.emailCount,
      "meetingCount": this.utils.ds.meetingCount,
      "textCount":this.utils.ds.textCount,
      "children":buchildArr
  }
  this.utils.ds =  this.data

  }

  getAllDataHierarchyData(){
    this.cilick = false;

      this.serviceCallProvider.callService(this.utils.GETHIERARCHY_URL+'/'+this.utils.id ,null,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];

        if(status===this.utils.STATUS_SUCCESS){
          this.utils.ds = {};
          this.utils.ds =output_data;



        } else {
           this.toastr.error(result['msg']);
        }
      });
  }

  selectNode(nodeData) {
    this.emService._scrollToTop.next(nodeData.id);
  }
  close() {
    this.animate = false ;
      this.emService.showHideWindow(false, "","");
      this.emService.setIsHierarchyOpen(false);
  }
  animEnd($event) {
    // alert();
  }
  loadComponent() {
    let comp = this.cf.resolveComponentFactory(this.dynamicComponent);
    if(this.dynamicHost) {
      this.dynamicHost.vcr.clear();
      this.dynamicHost.vcr.createComponent(comp);
      this.animate = true ;
    }
  }
  windowResize($event) {


    this.windowMinimize = $event;
    if($event) {
      this.tempStyle = this.window.nativeElement.style.cssText;
      this.window.nativeElement.style = "transform: translateX(-20px);";
    }else{
      this.window.nativeElement.style = this.tempStyle;
         this.serviceCallProvider.callService(this.utils.GETHIERARCHY_URL+'/'+this.utils.id ,null,null).then(result => {
      let status = result[this.utils.SERVICE_CALL_STATUS];
      let output_data : any= result[this.utils.SERVICE_CALL_DATA];

      if(status===this.utils.STATUS_SUCCESS){
        this.utils.ds = {};
        this.utils.ds =output_data;



      } else {
         this.toastr.error(result['msg']);
      }
    });
    }
  }
}
