import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateCr } from '../../model/create-cr';
import { CreatecrService } from '../../services/createcr.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TextEditorComponent } from '../../text-editor/text-editor.component';
import { PostResponse } from '../../model/post-response';

interface forMatSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-createcr',
  templateUrl: './createcr.component.html',
  styleUrls: ['./createcr.component.css']
})
export class CreatecrComponent implements OnInit {
  maxDate;
  createcrReq: CreateCr;
  message='';
  formsubmitted = false;
  respMessage = '';
  date = new Date();

  
 public  prioritylist: forMatSelect[] = [
    {value: 'low', viewValue: 'Low'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'high', viewValue: 'High'},
    {value: 'veryhigh', viewValue: 'Very High'}
  ];
  componentList: forMatSelect[] = [
    {value: 'FI', viewValue: 'FI'},
    {value: 'MM', viewValue: 'MM'},
    {value: 'HCM', viewValue: 'HCM'},
    {value: 'SRM', viewValue: 'SRM'},
    {value: 'MDM', viewValue: 'MDM'}
  ];
  types: forMatSelect[] = [
    {value: 'cr', viewValue: 'Change Request'},
    {value: 'bf', viewValue: 'Bug Fixing'},
  ];
  public createcrForm: FormGroup = new FormGroup({
    ticketno: new FormControl( null, Validators.required),
    component: new FormControl(null, Validators.required),
    priority: new FormControl(null,Validators.required),
    raisedOn: new FormControl(null, Validators.required),
    crType: new FormControl(null, Validators.required),
    existingProcess: new FormControl(null),
    proposedProcess: new FormControl(null )
  });
  constructor(private createcrserviceobj: CreatecrService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() - 1);  }
  onSubmit(){
    if(this.createcrForm.invalid){
      console.log('invalid',this.createcrForm);
           return;
    }
    else{
      var date = new Date();
      const creatChangeRequest = { 
        crNo: '',
        crSerialNo: 0,
        processId : 'CR',
        reqBy: 'SS004700',
        ticketNo: this.createcrForm.value.ticketno,
        component: this.createcrForm.value.component,
        priority: this.createcrForm.value.priority,
        raisedon: this.createcrForm.value.raisedOn,
        crType: this.createcrForm.value.crType,   // CR – Change Request, BF – Bug Fixing
        existingProcess: '',
        proposedProcess: '',
        reqDate : date,
        reqTime : date.toLocaleTimeString(),
        department : 'B&T'
      }
    

      // this.createcrReq.crNo = '';
      // this.createcrReq.crSerialNo = 0;
      // this.createcrReq.reqBy= '';
      // this.createcrReq.ticketNo= this.createcrForm.value.ticketno;
      // this.createcrReq.component= this.createcrForm.value.component;
      // this.createcrReq.priority= this.createcrForm.value.priority;
      // this.createcrReq.raisedon = this.createcrForm.value.raisedOn;
      // this.createcrReq.crType= this.createcrForm.value.crType;
      // this.createcrReq.existingProcess= this.createcrForm.value.existingProcess;
      // this.createcrReq.proposedProcess = this.createcrForm.value.proposedProcess;
      console.log('CR object', creatChangeRequest );
      this.createcrserviceobj.postCreateCR(creatChangeRequest)
      .subscribe((data: PostResponse) => { 
        const resData = data;
        console.log("success:", resData);
        this.respMessage = "Request submiited Successfully. Your request Id : " + resData.reqNo + " & Workflow Id : " + resData.workflowId;
        },
        (error: any) => {
          console.log('on error : ', error)
          this.respMessage = "Error: " + error.statusText + error.message;
        }
      );
    }
    console.warn(this.createcrForm.value);
  }

  openDialog(processtype : string){
    //this.router.navigate(['/text-editor']);
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        if(processtype == 'EP')
        {
          dialogConfig.data = {
            id: 1,
            title: 'Existing Process'
          };
        }
        else if(processtype == 'PP')
        {
          dialogConfig.data = {
            id: 1,
            title: 'Proposed Process'
        };
        }
        this.dialog.open(TextEditorComponent, dialogConfig);
        const dialogRef = this.dialog.open(TextEditorComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
          data => console.warn("Dialog output:", data)
      );    
    
  }
}
