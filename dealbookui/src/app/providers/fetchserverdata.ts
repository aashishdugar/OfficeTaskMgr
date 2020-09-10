import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utils } from './utils';
import { ToastrService } from 'ngx-toastr';
//import { AlertService } from '../alert/alert.service';

@Injectable()
export class FetchServerDataProvider {
  serverUrl = '/dealbookback/';
  //serverUrlInventory = 'http://192.168.0.53:8086/PtsErpInventory/api/';
  networkStatus: boolean = true;
  currentService = null;
  http_provider: HttpClient;
  res: object = {};
  header: Object = {};
  sessionid: string = '';
  tid: string = null;
  date: Date = new Date();
  offset: any = this.date.getTimezoneOffset();
  userName: any = localStorage.getItem('username');
  timezone: string = 'Asia/Kolkata';

  constructor(public toastr:ToastrService,public http: HttpClient, public router: Router, public utils: Utils) {
    this.http_provider = http;
  }

 
  /***********************************************************************************************************
   * function : callService(serviceUrl,data,isHeader,isLoading)
   * This function will be called from other pages to make service call
   * It takes 4 parameters :
   *  1] service Url : which service to call
   *  2] data : input to service without header
   *  3] isHeader : a boolean flag to append header to input
   *  4] isLoading : a boolean flag ,  if it is true then show loading spinner 
   **********************************************************************************************************/
  callService(serviceUrl, data, isHeader) {
    this.utils.isLoadingSpin = true;
    this.sessionid = localStorage.getItem('sessionid');
    this.tid = localStorage.getItem('tid');
    this.userName = localStorage.getItem('username');
    /* 
    show spinner if isLoading is true  
     */

    // this.header = {
    //   "header": {
    //     "appclient": this.utils.appclient,
    //     "userid": this.userName,
    //     "sessionid": this.sessionid,
    //     "tid": this.tid,
    //     "createdDate": this.date,
    //     "timezone": this.timezone,
    //     "timezoneoffset": this.offset
    //   }
    // };
    let inputObj = {header:this.header,data:data};
    
// console.log("inputobject "+JSON.stringify(inputObj));

    let promise = this.createServiceCall(this.serverUrl + serviceUrl, data);

    return promise;
  }
/***********************************************************************************************************
   * function : callInventoryService(serviceUrl,data,isHeader,isLoading)
   * This function will be called from other pages to make service call
   * It is same as above service but its URL is different
   **********************************************************************************************************/
  // callInventoryService(serviceUrl, data, isHeader) {
  //   this.utils.isLoadingSpin = true;
  //   this.sessionid = localStorage.getItem('sessionid');
  //   this.tid = localStorage.getItem('tid');
  //   this.userName = localStorage.getItem('username');
  //   /* 
  //   show spinner if isLoading is true  
  //    */

  //   this.header = {
  //     "header": {
  //       "appclient": this.utils.appclient,
  //       "userid": this.userName,
  //       "sessionid": this.sessionid,
  //       "tid": this.tid,
  //       "createdDate": this.date,
  //       "timezone": this.timezone,
  //       "timezoneoffset": this.offset
  //     }
  //   };
  //   let inputObj = Object.assign({}, this.header, data);


  //   let promise = this.createServiceCall(this.serverUrlInventory + serviceUrl, inputObj);

  //   return promise;
  // }
  /***********************************************************************************************************
   * function : createServiceCall(url,data)
   * This function will call the service.
   * This will retuen promise obhject , it will contain output of the service if service succeded
   * otherwise the message with cause of failure .
   **********************************************************************************************************/
  createServiceCall(url, data) {
    // console.log("data "+JSON.stringify(data));
    let promise = new Promise((resolve, reject) => {

      /* 
      if network is available then call service
       */
      if (this.networkStatus) {
       // alert("createservicecall");
        this.currentService = this.http.post(url, data, {
          headers: {
            MIMEType: "application/json",
            AccessControlAllowOrigin: "*", 
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Accept',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Max-Age': '1728000'
          }
        }).subscribe(res => {
          if ('failed' === res) {
            this.utils.isLoadingSpin = false;
            let errCode = res;
            // console.log("errCode" + JSON.stringify(errCode));

            if (errCode == "TID_1000") {
              this.utils.isLoadingSpin = false;
             // console.log("Session Expired");
              localStorage.clear();
              this.router.navigate(['/login']);
            }
          }  else if('FAIL' == res['status']) {
            // console.log("Res "+ JSON.stringify(res));
            this.utils.isLoadingSpin = false;
            if('Your Login Session Expired, Please Login Again' == res['errormsg']){
              localStorage.clear();
              this.router.navigateByUrl('/login');
            } else {
              //this.alertService.error(res['message']);
             // alert(res['errormsg']);
              this.toastr.error(res['errormsg']);
            }
          } else {
            this.utils.isLoadingSpin = false;
            resolve(res);
          }
          }, (err) => {
            this.utils.isLoadingSpin = false;
           
            if (err['name'] == "TimeoutError" || err['status'] === 0) {
              reject("Can't reach to server,please try again later.");
            } else if (err['status']) {
              let errorMessage = "Unknown Error occurred";
              switch (err['status']) {
                /* 
                Unauthorized
                 */
                case 401:
                  errorMessage = "You are not authenticate to call this service";
                  break;
                /* 
                 Forbidden
                */
                case 403:
                  errorMessage = "You are not authorized to perform this operation or the resource is unavailable for some reason";
                  break;
                /* 
                internal server error
                 */
                case 500:
                  errorMessage = "Internal Server Error occurred , please try again later";
                  break;
                /* 
                Request Timeout 
                */
                case 408:
                /*
                  gatewat timeout
                 */
                case 504:
                /*  
                 Network connect timeout error
                 */
                case 599:
                  errorMessage = "Can't reach to server , please try again later.";
                  break;
                /*  
                 Service Unavailable
                 */
                case 503:
                  errorMessage = "Service you are trying is currently unavailable , please try again later.";
                  break;
                default:
                  errorMessage = "You are not authenticate to call this service";
                  break;
              }
              this.utils.isLoadingSpin = false;
              reject(errorMessage);
              //this.alertService.error(errorMessage);
              this.toastr.error(errorMessage);
            } else {
              this.utils.isLoadingSpin = false;
              reject(err.message);
              // this.alertService.error(err.message);
              // alert(errorMessage);
              this.toastr.error(err.message);
             
            }
          });
      } else {
        this.utils.isLoadingSpin = false;
        reject("");
      }
    });
    //this.utils.isLoadingSpin = false;
    return promise;
  }

}