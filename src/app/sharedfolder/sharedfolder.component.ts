import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SharedfolderRequest } from '../model/sharedfolder-request';
import { SharedfolderService } from '../services/sharedfolder.service';
import { PostResponse } from '../model/post-response';

interface User {
  value: string;
  viewValue: string;
}

interface Access{
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-sharedfolder',
  templateUrl: './sharedfolder.component.html',
  styleUrls: ['./sharedfolder.component.css']
})
export class SharedfolderComponent implements OnInit {
  users: User[] = [
    {value: 'self', viewValue: 'Self'},
    {value: 'vendor', viewValue: 'Vendor'},
    {value: 'auditor', viewValue: 'Auditors'}
  ];

  accessType: Access[] = [
    {value: 1, viewValue: 'Read Only'},
    {value: 2, viewValue: 'Read / Write'}
  ];
  private sharedfolderaccessreq : SharedfolderRequest;
  message= '';
  respMessage= '';
  constructor(private sharedfolderaccessservice : SharedfolderService) { }

  ngOnInit() {
  }

  sharedfolderForm = new FormGroup({
    usedBy: new FormControl('', Validators.required),
    ad: new FormControl('', [Validators.required]),// Validators.pattern('^\\d*$')]),
    typeofAccess: new FormControl('', Validators.required),
    sharedfolderName: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  }); 
change(){}
  
  onSubmit(){
    if(this.sharedfolderForm.invalid){
      return;
    }
    else{
      var date = new Date();
      const sharedfolderaccessreq = {
        reqNo:'',
        reqSrNo: 0,
        processId: '',
        reqBy: '',
        useBy: this.sharedfolderForm.value.usedBy,
        userAd: this.sharedfolderForm.value.ad,
        accessType: this.sharedfolderForm.value.typeofAccess,
        folder_name: this.sharedfolderForm.value.sharedfolderName,
        reason: this.sharedfolderForm.value.reason,
        reqDate: date,
        reqTime: date.toLocaleTimeString(),
        workflowId: '',
        department : 'B&T'
      };
      
      this.sharedfolderaccessservice.postSharedFolderAccessReq(sharedfolderaccessreq).
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

