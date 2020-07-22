import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestScript } from '../../model/testscript';


@Component({
  selector: 'app-uat',
  templateUrl: './uat.component.html',
  styleUrls: ['./uat.component.css']
})
export class UatComponent implements OnInit {

  scripts: Array<TestScript> = [];
  newScript: any = {};

  public uatForm: FormGroup = new FormGroup({
    ticket: new FormControl( null, Validators.required),
    uatStatus: new FormControl(null, Validators.required),
    component: new FormControl(null,null),
    priority: new FormControl(null,null),
    raisedOn: new FormControl(null,null),
    reason: new FormControl(null, Validators.required),
    action: new FormControl(null, Validators.required)
  });
  constructor() { }

  ngOnInit() {

    this.newScript = {  tcode: "", step: "", exp_res: "", out_res: "", status:"", remarks:""}
    this.scripts.push(this.newScript);
  }
 
  deleteRow(index){
    if(this.scripts.length == 1){
      window.alert("Can't delete the last row");
    }
    else {
      console.log(this.scripts[index].tcode);
      this.scripts.splice(index,1);
    }
  }

  addRow(){
    this.newScript = {  tcode: "", step: "", exp_res: "", out_res: "", status:"", remarks:""}
    this.scripts.push(this.newScript);
  }

  onSubmit(){

    if(this.uatForm.invalid){
      console.log('invalid',this.uatForm);
           return;
    }
    else{
      var date = new Date();
      const uat = { 
        uatNo: '',
        uatSerialNo: 0,
        processId : 'UT',
        reqBy: 'SS004700',
        ticketNo: this.uatForm.value.ticketno,
        component: this.uatForm.value.component,
        priority: this.uatForm.value.priority,
        raisedon: this.uatForm.value.raisedOn,
        testScript: [],   // CR – Change Request, BF – Bug Fixing
        uatStatus: this.uatForm.value.uatStatus,
        action: '',
        reqDate : date,
        reqTime : date.toLocaleTimeString(),
        department : 'B&T'
      }  


    } 
  }
}


