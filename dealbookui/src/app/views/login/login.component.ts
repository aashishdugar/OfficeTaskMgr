import { Component } from '@angular/core';
import { AuthService} from "../../shared/services/auth.service"
import {FetchServerDataProvider} from "../../providers/fetchserverdata";
import {ContactsService} from "../../services/contacts.service";
import {Utils} from "../../providers/utils";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styles: ['app-header { display: none; }']
})
export class LoginComponent { 

  user = {
    email : "",
    password : ""
  };
 
  constructor(
    public authService: AuthService,
     private serviceCallProvider: FetchServerDataProvider, 
     private contactsService: ContactsService,
      public utils: Utils,
       public router: Router,
       public toster:ToastrService
  ) { }
  showNav:boolean = true;
  ngOnInit() { 

 
  }


  sendUser(){

    this.utils.serviceURL = "checkpoint/login";
    this.utils.input = {
      email: this.user.email,
      password: this.user.password
    }

   this.serviceCallProvider.callService(this.utils.serviceURL,this.utils.input,null).then(result => {
    let status = result[this.utils.SERVICE_CALL_STATUS];
    let output_data : any= result[this.utils.SERVICE_CALL_DATA];
   
    if(status===this.utils.STATUS_SUCCESS){
      this.toster.success("User Verified");
      this.router.navigate(['dashboard']);
      let userName = output_data.name;
      let UserID = output_data.id;
      localStorage.setItem("userName",userName);
      localStorage.setItem("userID",JSON.stringify(UserID));
    } else {
      //this.alertService.error(result['message']); 
       this.toster.error(result['msg']);
    }
  });





    // this.serviceCallProvider.callService(this.utils.serviceURL, this.utils.input, true).then(
    //   result => {
    //     let status = result[this.utils.SERVICE_CALL_STATUS];
    //     let output_data: any = result[this.utils.SERVICE_CALL_DATA];

    //     if(status === this.utils.USER_VALIDATED  && this.utils.isLoginPage === true) { //need to check if loginPage is needed or not
    //       console.log(output_data);
         
    //     }
    //     else{
    //     // console.log(output_data.errormsg)
    //     //  this.toster.success(output_data['errormsg']);
      
    //     }
    //    // this.utils.isLoginPage = false; //this property needs to be checked.
    //   });
  }

  testUser() {
    const data = {
      email : this.user.email,
      password : this.user.password
    };

    console.log(data);
  }
}
