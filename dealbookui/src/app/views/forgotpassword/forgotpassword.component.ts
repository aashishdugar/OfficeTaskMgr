import { Component, OnInit } from '@angular/core';
import {FetchServerDataProvider} from "../../providers/fetchserverdata";
import {Utils} from "../../providers/utils";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'pts-forgotpassword',
  templateUrl: './forgotpassword.component.html',
})
export class ForgotpasswordComponent implements OnInit {

  user = {
    email: ""
  };

  constructor(public toastr:ToastrService, private serviceCallProvider: FetchServerDataProvider,public utils: Utils) { }

  ngOnInit(): void {
  }

  sendUser(){
    this.utils.serviceURL = "checkpoint/resetPassword";
    this.utils.input = {
      email: this.user.email,
    }

    if(this.user.email.length == 0) alert("Please enter a valid User Name");
    this.serviceCallProvider.callService(this.utils.serviceURL, this.utils.input, true).then(
      result => {
        let status = result[this.utils.SERVICE_CALL_STATUS];
        let output_data: any = result[this.utils.SERVICE_CALL_DATA];

        if(status === this.utils.STATUS_SUCCESS){
          this.toastr.success("A reset link has been sent to your email id.  Please follow the instructions on that.");
          // alert()
          // console.log(output_data+" -link sent");
        }
        else{
          alert(status);
        }
      });
  }

}
