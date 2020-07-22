import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

export interface user {
  value: string;
  viewValue: string;
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sharedfolder-access',
  templateUrl: './sharedfolder-access.component.html',
  styleUrls: ['./sharedfolder-access.component.css']
})

export class SharedfolderAccessComponent implements OnInit {
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.addRow();
  }

  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      tcode: ['', Validators.required],
      stepsforexecution: ['', Validators.required],
      expectedresult: ['', Validators.required],
      outputresult: [''],
      status: ['', Validators.required],
      isEditable: [true]
    });
  }

  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.push(this.initiateForm());
  }

  deleteRow(index: number) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: FormGroup) {
    group.get('isEditable').setValue(false);
  }

  saveUserDetails() {
    console.log(this.userTable.value);
  }

  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm() {
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
  }
}
