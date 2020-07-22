import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsbRequest } from '../model/usb-request';
import { UsbaccessService } from '../services/usbaccess.service';
import { PostResponse } from '../model/post-response';

@Component({
  selector: 'app-usb-access',
  templateUrl: './usb-access.component.html',
  styleUrls: ['./usb-access.component.css']
})
export class UsbAccessComponent implements OnInit {

  usbaccessForm = new FormGroup({
    accessfor: new FormControl('', Validators.required),
    sdate: new FormControl('', Validators.required),
    edate: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  });

  accessList: string[] = ['USB', 'DVD'];
 // usbAccessReq : UsbRequest;
  message = '';
  minDate;
  respMessage = '';
  constructor(private usbaccessserviceobj : UsbaccessService) { }

  ngOnInit() {
    this.minDate=new Date();
  }

  /* Conver date object to string */
  //  sdate(e) {
  //    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
  //    this.usbaccessForm.get('sdate').setValue(convertDate, {
  //      onlyself: true
  //    })
  //  }
  //  edate(e) {
  //   var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
  //   this.usbaccessForm.get('edate').setValue(convertDate, {
  //     onlyself: true
  //   })
  //  }
  // sdate = new Date(2020, 4, 20, 13, 10, 12, 50);
  // edate = new Date(2020, 5, 15, 13, 10, 12, 50);

  calculateDays(startdate: Date, enddate: Date): any{
    var diff = Math.abs(enddate.getTime() - startdate.getTime());
    var days = Math.ceil( diff / (1000 * 3600 * 24));
    return days;
  }

   concatenateArrayString(accessf: string[]): string{
    var concatstring = '';
     for(var i = 0; i < accessf.length; i++)
     { 
        console.log(accessf[i]); 
        concatstring = concatstring.concat((accessf[i]));
     }
     return concatstring;
   }

  onSubmit(){
    
    if(this.usbaccessForm.invalid){
      return;
    }
    else{
      var date = new Date();
      var days = this.calculateDays(this.usbaccessForm.value.sdate, this.usbaccessForm.value.edate);
      var newstring = this.concatenateArrayString(this.usbaccessForm.value.accessfor);
      //console.warn(newstring);
      const usbAccessReq = {
         reqNo: '',
         reqSrNo: 0,
         processId: 'UP',
         reqBy: 'SS004700',
         accessType: this.usbaccessForm.value.accessfor.toLocaleString(),
         accessDate: this.usbaccessForm.value.sdate, 
         noofDays: days, 
         reqDate: date,
         reqTime: date.toLocaleTimeString(),
         workflowId: '',
         department : 'B&T' 
       };

       console.log(usbAccessReq);
      // //console.warn(days);
      // // this.usbAccessReq.reqNo = '';
      // // this.usbAccessReq.reqSrNo = 0;
      // // this.usbAccessReq.processId= '';
      // // this.usbAccessReq.reqBy= '';
      // // this.usbAccessReq.accessType= this.usbaccessForm.value.accessfor;
      // // this.usbAccessReq.accessDate = this.usbaccessForm.value.datepick;
      // // this.usbAccessReq.noofDays= 1;
      // // this.usbAccessReq.reqDate= date;
      // // this.usbAccessReq.reqTime = date.toLocaleTimeString();
      // // this.usbAccessReq.workflowId = '';

       this.usbaccessserviceobj.postUsbAccessReq(usbAccessReq).
       subscribe((data: PostResponse) => { 
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
