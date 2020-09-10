import { Component, OnInit } from '@angular/core';
import { FetchServerDataProvider } from 'src/app/providers/fetchserverdata';
import { Utils } from '../../app/providers/utils';
import {DatePipe} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from '../services/contacts.service';
import { EventEmitterService } from '../services/event-emitter.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-hierarchy-modal',
  templateUrl: './hierarchy-modal.component.html',
  styleUrls: ['./hierarchy-modal.component.scss']
})
export class HierarchyModalComponent implements OnInit {
  hierarchyData:any = [];
  contactName:any = '';
  contactId:any = [];
  contactData:any = '';
  
  ds:any = {};
  //ds{
    // id: '1',
    // name: 'Lao Lao',
    // title: 'general manager',
    // children: [
    //   { id: '2', name: 'Bo Miao', title: 'department manager' },
    //   {
    //     id: '3',
    //     name: 'Su Miao',
    //     title: 'department manager',
    //     children: [
    //       { id: '4', name: 'Tie Hua', title: 'senior engineer' },
    //       {
    //         id: '5',
    //         name: 'Hei Hei',
    //         title: 'senior engineer',
    //         children: [
    //           { id: '6', name: 'Dan Zai', title: 'engineer' },
    //           { id: '7', name: 'Dan Dan', title: 'engineer' },
    //           { id: '8', name: 'Xiang Xiang', title: 'engineer' },
    //           { id: '9', name: 'Ke Xin', title: 'engineer' },
    //           { id: '10', name: 'Xiao Dan', title: 'engineer' },
    //           { id: '11', name: 'Dan Dan Zai', title: 'engineer' }
    //         ]
    //       },
    //       { id: '12', name: 'Pang Pang', title: 'senior engineer' },
    //       { id: '13', name: 'Er Pang', title: 'senior engineer' },
    //       { id: '14', name: 'San Pang', title: 'senior engineer' },
    //       { id: '15', name: 'Si Pang', title: 'senior engineer' }
    //     ]
    //   },
    //   { id: '16', name: 'Hong Miao', title: 'department manager' },
    //   { id: '17', name: 'Chun Miao', title: 'department manager' },
    //   { id: '18', name: 'Yu Li', title: 'department manager' },
    //   { id: '19', name: 'Yu Jie', title: 'department manager' },
    //   { id: '20', name: 'Yu Wei', title: 'department manager' },
    //   { id: '21', name: 'Yu Tie', title: 'department manager' }
    // ]
  //};
  constructor(private cs: ContactsService, private emService: EventEmitterService,public toastr:ToastrService, public serviceCallProvider:FetchServerDataProvider,public utils:Utils) { }

  ngOnInit(): void {
 
  }
  selectNode(nodeData) {
    //alert(`Hi All. I'm ${nodeData.contactName}. I'm a ${nodeData.contactName}.`);
    // this.emService.setOpenRow(nodeData.id);
    this.emService._scrollToTop.next(nodeData.id);
  }
  showChildren(data,event){
    // console.log("data "+data);
    // console.log("event "+event);
  }
  getAllDataHierarchy(id,name){
    console.log("getAllDataHierarchy function ");
    this.utils.name = name
      this.serviceCallProvider.callService(this.utils.GETHIERARCHY_URL+'/'+id,null,null).then(result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data : any= result[this.utils.SERVICE_CALL_DATA];
      
        if(status===this.utils.STATUS_SUCCESS){
          // console.log("getAllDataHierarchy "+JSON.stringify(output_data));
          this.utils.ds = {};
          this.utils.ds =output_data
          //console.log("ds "+JSON.stringify(this.utils.ds));
         // this.contactData = output_data
        //  this.utils.contactName = output_data.contact
        //  console.log("contact "+this.utils.contactName);
        //  this.utils.contactId = output_data.contactId
       
      
        } else {
          //this.alertService.error(result['message']); 
           this.toastr.error(result['msg']);
        }
      });


  }
  // showChildren(employee, $event) {
  //   let list = this.cs.getContacts().filter(c=> c['reportto'] && c['reportto'].id == employee.id);
  //   list.length > 0 ? employee["children"] =list : alert(`No reporties to "${employee.name}"`);
  
  //   $event.stopPropagation();
  // }
  // getChildForParent(id) {
  //   console.log("id"+id);
  //   if (($('#mainli' + id).find('ul').length > 0)) {
  //     $('#mainli' + id).children('ul').remove();
  //   } else {
  //     console.log("id"+id);
  //     this.serviceCallProvider.callService(this.utils.GETHIERARCHYSUBCHILD_URL+'/'+id, null, true).then(result => {
  //       let status = result[this.utils.SERVICE_CALL_STATUS];
  //       let output_data: any = result[this.utils.SERVICE_CALL_DATA];

  //       if (status === this.utils.STATUS_SUCCESS) {
  //         /* Create UL Tag for New Row under clicked Employee LI */
  //         console.log("child data "+JSON.stringify(output_data.childContact));
  //         let ulele = document.createElement("UL");
  //         ulele.setAttribute("style", "list-style: none;display: inline-flex;padding-top: 0;margin: 0 0 1em 0;");
  //         var liele, divele, h4ele, pele;
  //          /* Create LI Tags for in above UL for each child employee */
  //         for (let i = 0; i < output_data.childContact.length; i++) {
  //           liele = document.createElement("LI");
  //           liele.setAttribute("id", "subli" + output_data.childContact[i].contactId);
  //           /* Create DIV element */
  //           divele = document.createElement("DIV");

  //           divele.setAttribute("class", "tf-nc");
  //           divele.setAttribute("id", "subdiv" + output_data.childContact[i].contactId);
  //           divele.setAttribute("style", "width: max-content; margin:0.6em;");
  //           /* Create H4 & P element */
  //           h4ele = document.createElement("h4");
  //           pele = document.createElement("p");
         
  //           var h4txt = document.createTextNode(output_data.childContact[i].contact);
  //           //var ptxt = document.createTextNode(output_data.childContact[i].role);
  //           h4ele.appendChild(h4txt);
  //          // pele.appendChild(ptxt);
  //           divele.appendChild(h4ele);
  //           divele.appendChild(pele);
  //           /* Append DIV to LI and then That LI will be append to UL */
  //           liele.appendChild(divele);
  //           ulele.appendChild(liele);
  //           document.getElementById('mainli' + id).appendChild(ulele);
  //         }
  //          /* Apply click event to each DIV inside LI Dynamically */
  //         for (let i = 0; i < output_data.length; i++) {
  //           document.getElementById('subdiv' + output_data.childContact[i].contactId).addEventListener("click", (event: Event) => {
  //             this.getSubChildForParent(output_data.childContact[i].contactId)
  //           });
  //         }
  //       } else {
       
  //       }
  //     });
  //   }
  // }

  // getSubChildForParent(id) {
  //   if (($('#subli' + id).find('ul').length > 0)) {
  //     $('#subli' + id).children('ul').remove();
  //   } else {
  //     this.utils.serviceURL = 'orgms/getchildemp';
  //     this.utils.input = {
  //       "employee": {
  //         "id": id
  //       }
  //     };

  //     this.serviceCallProvider.callService(this.utils.serviceURL, this.utils.input, true).then(result => {
  //       let status = result[this.utils.SERVICE_CALL_STATUS];
  //       let output_data: any = result[this.utils.SERVICE_CALL_DATA];

  //       if (status === this.utils.STATUS_SUCCESS) {


  //         let ulele = document.createElement("UL");
  //         ulele.setAttribute("style", "list-style: none;display: inline-flex;padding-top: 0;margin: 0 0 1em 0;");
  //         var liele, divele, h4ele, pele;
  //         let str = '<ul style=" list-style: none;display: inline-flex;margin: 0.5em;padding-top: 0;">';

  //         for (let i = 0; i < output_data.length; i++) {
  //           liele = document.createElement("LI");
  //           liele.setAttribute("id", "subli" + output_data[i].id);
  //           divele = document.createElement("DIV");

  //           divele.setAttribute("class", "tf-nc");
  //           divele.setAttribute("id", "subChilddiv" + output_data[i].id);
  //           divele.setAttribute("style", "width: max-content; margin:0.6em;");

  //           h4ele = document.createElement("h4");
  //           pele = document.createElement("p");
           
  //           var h4txt = document.createTextNode(output_data[i].firstName);
  //           var ptxt = document.createTextNode(output_data[i].role);
  //           h4ele.appendChild(h4txt);
  //           pele.appendChild(ptxt);
  //           divele.appendChild(h4ele);
  //           divele.appendChild(pele);

  //           liele.appendChild(divele);
  //           ulele.appendChild(liele);
  //           document.getElementById('subli' + id).appendChild(ulele);
  //         }
  //         for (let i = 0; i < output_data.length; i++) {
  //           document.getElementById('subChilddiv' + output_data[i].id).addEventListener("click", (event: Event) => {
  //             this.getSubChildForParent(output_data[i].id)
  //           });
  //         }

  //       } else {
  //        //this.alertService.error(result['message']);
  //       }
  //     });
  //   }
  // }
}
