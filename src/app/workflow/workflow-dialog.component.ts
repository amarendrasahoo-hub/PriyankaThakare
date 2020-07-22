import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder} from '@angular/forms'
import { inject } from '@angular/core/testing';



@Component({
    template: `
    <form [formGroup]="form" (ngSubmit)="submit(form)">
    <h1 mat-dialog-title>WorkFlow Approval </h1>
    <mat-dialog-content>
    <p>
    <div>WorkFlowID    : {{data.id}} </div>
    <div>Requested by  : {{data.name}} </div> 
    <div>Requested for : {{data.for}}</div>  
    <p>
    <div></div>

    <mat-form-field>
        <input matInput formControlName="comments" placeholder="Enter Comments">
    </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button color="primary" type="button" (click)="onApproval(form)">Approve</button>
      <button mat-button color="accent" type="button" (click)="onRejected(form)" >Reject</button>
      <button mat-button type="button" mat-dialog-close>Cancel</button>
    </mat-dialog-actions>
  </form>
    `
})

export class WorkFlowDialogComponent implements OnInit{
    form: FormGroup;

    passData : {
        action : string,
        comments : string;

    }
              

    constructor(private formBuilder: FormBuilder, 
                private dialogRef : MatDialogRef<WorkFlowDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data  
                ){  }

    ngOnInit(){
        this.form = this.formBuilder.group({
            comments:  ''
            
        })
    }      

    submit(form){
     this.dialogRef.close(`$(form.value.comments)`);
     console.log(form.value.comments);   
    }
    
    onApproval(form){
    //    console.log(form.value.comments);   
        this.passData = { action: 'A', comments: form.value.comments } 
        this.dialogRef.close(this.passData);   
        window.alert("Approved");
        //this.workflowService.updateWorkflow()
        }

    onRejected(form){
        this.passData = { action: 'R', comments: form.value.comments } 
        this.dialogRef.close(this.passData);    
        window.alert("rejected")
        console.log(form.value.comments )
    }
}