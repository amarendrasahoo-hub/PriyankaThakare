import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Application{
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-remote-access',
  templateUrl: './remote-access.component.html',
  styleUrls: ['./remote-access.component.css']
})
export class RemoteAccessComponent implements OnInit {
  deployApps: Application[] = [
    {value: 1, viewValue: 'SAP'},
    {value: 2, viewValue: 'Danaos'},
    {value: 3, viewValue: 'Afsys'}

  ];
  form = new FormGroup({
    accesstype: new FormControl('', Validators.required),
    citrixapps: new FormControl(''),
    ip: new FormControl('')
  });
  model = '';
  constructor() { }

  ngOnInit() {
  }
  
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }
 
  changeAccessType(e) {
    console.log(e.target.value);
    
  }

  
}