import { Component, OnInit } from '@angular/core';
import {FetchServerDataProvider} from "../../providers/fetchserverdata";
import {Router} from "@angular/router";
import {Utils} from "../../providers/utils";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'pts-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  user = {
    email : "",
    token : "",
    password : ""
  };
  confirmPassword = "";

  constructor(public toastr:ToastrService, private router: Router,private serviceCallProvider: FetchServerDataProvider,public utils: Utils) { }

  ngOnInit(): void {
  }

  sendUser(){
    this.utils.serviceURL = "checkpoint/changePassword";
    this.utils.input = {
      email: this.user.email,
      token: this.user.token,
      password: this.user.password

    };

    // if(!this.isValid()) alert("The passwords did not match. Please try again.")
   // else {
      this.serviceCallProvider.callService(this.utils.serviceURL, this.utils.input, true).then(
        result => {
          let status = result[this.utils.SERVICE_CALL_STATUS];
          let outputData = result[this.utils.SERVICE_CALL_DATA];

          if(status ===  this.utils.STATUS_SUCCESS){
            this.toastr.success("Your password has been reset!");
            // alert("Your password has been reset!");
            // console.log(status);
            this.router.navigate(['/sign-in']);
          }
          else{
            alert(status);
          }
        });
    }
  //}

  /* check to see new and confirm passwords field match */
  // isValid(){
  //   if(this.confirmPassword.length > 0 && this.confirmPassword === this.user.password) return true;
  // }

}
