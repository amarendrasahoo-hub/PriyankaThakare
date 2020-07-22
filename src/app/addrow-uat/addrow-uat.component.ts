import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface UsersData {
  id: number;
  tcode: string;
  stepsforexecution: string;
}
@Component({
  selector: 'app-addrow-uat',
  templateUrl: './addrow-uat.component.html',
  styleUrls: ['./addrow-uat.component.css']
})
export class AddrowUatComponent {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<AddrowUatComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
