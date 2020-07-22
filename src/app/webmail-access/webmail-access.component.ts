import { Component, OnInit } from '@angular/core';
import { WebmailRequest } from '../model/webmail-request';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { WebmailaccessService } from '../services/webmailaccess.service';
import { PostResponse } from '../model/post-response';

@Component({
  selector: 'app-webmail-access',
  templateUrl: './webmail-access.component.html',
  styleUrls: ['./webmail-access.component.css']
})
export class WebmailAccessComponent implements OnInit {

  webmailaccessForm = new FormGroup({
    currentEmailID: new FormControl('', [Validators.required, Validators.email]),
  });
  
  formsubmitted = false;
  message = '';
  respMessage = '';
  date = new Date();
  public webmailAccessReq: WebmailRequest;
  constructor(private webmailAccessService: WebmailaccessService) { }
  ngOnInit() {
  }
  get f(){ return this.webmailaccessForm.controls; }

  onSubmit() {
    this.formsubmitted = true;
    if(this.webmailaccessForm.invalid){
      return;
    }
    else {//console.log("before calling service", this.webmailAccessReq)
      var date = new Date();
      const webmailAccessReq  =  {
      reqNo :'',
      reqSrNo : 0,
      processId : 'WM',
      reqBy : 'SS004700', //to be taken from user emp code logged in
      emailId : this.webmailaccessForm.value.currentEmailID,
      reqDate : date,
      reqTime : date.toLocaleTimeString(),
      workflowId : "",
      department : 'B&T'
    };
    this.webmailAccessService.postWebmailReq(webmailAccessReq)
    .subscribe((data: PostResponse) => { 
        const resData = data;
        console.log("success:", resData);
        this.respMessage = "Request submiited Successfully. Your request Id : " + resData.reqNo + " & Workflow Id : " + resData.workflowId;
      },
      (error: any) => {
        console.log('on error : ', error)
        this.respMessage = "Error: " + error.statusText + error.message;
       });
      }
  }
}
