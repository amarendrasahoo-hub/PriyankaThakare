import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable, matFormFieldAnimations, getMatIconFailedToSanitizeLiteralError } from '@angular/material';
import { AddrowUatComponent } from '../addrow-uat/addrow-uat.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UatService } from '../services/uat.service';
import { PostResponse } from '../model/post-response';
import { HttpClient } from '@angular/common/http';

export interface UsersData {
  id: number;
  tcode: string;
  stepsforexecution: string;
  expectedresult: string;
  outputresult: string;
  status: string;
}
interface forMatSelect {
  value: string;
  viewValue: string;
}
const ELEMENT_DATA: UsersData[] = [
  //{ id: 0, tcode: '', stepsforexecution: '', expectedresult: '', outputresult: '', status: ''},
  //  {id: 1560608769632, tcode: 'Artificial Intelligence', stepsforexecution: 'abcdFinally, once you have defined your columns, you need to tell the table which columns will be rendered in the header and data rows. To start, create a variable in your component that contains the list of the columns you want to render.', expectedresult: 'sjrbguebobsjvs', outputresult: 'irgheuhgoiebvodfnov', status: 'OK'},
  //  {id: 1560608796014, tcode: 'Machine Learning', stepsforexecution: 'abcd', expectedresult: 'sjrbguebobsjvs', outputresult: 'irgheuhgoiebvodfnov', status: 'OK'},
  //  {id: 1560608787815, tcode: 'Robotic Process Automation', stepsforexecution: 'abcd', expectedresult: 'sjrbguebobsjvs', outputresult: 'irgheuhgoiebvodfnov', status: 'OK'},
  //  {id: 1560608805101, tcode: 'Blockchain', stepsforexecution: 'abcd', expectedresult: 'sjrbguebobsjvs', outputresult: 'irgheuhgoiebvodfnov', status: 'OK'}
];

@Component({
  selector: 'app-submit-uat',
  templateUrl: './submit-uat.component.html',
  styleUrls: ['./submit-uat.component.css']
})

export class SubmitUatComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tcode', 'stepsforexecution', 'expectedresult', 'outputresult', 'status','action'];
  dataSource = ELEMENT_DATA;
  maxDate = '';
  uatTestScript = [];
  respMessage = '';
  prioritylist: forMatSelect[] = [
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
  uatstatus: forMatSelect[] = [
    {value: 'pass', viewValue: 'Passed'},
    {value: 'fail', viewValue: 'Failed'},
  ];

  public uatForm: FormGroup = new FormGroup({
    ticketno: new FormControl( null, Validators.required),
    component: new FormControl(null, Validators.required),
    priority: new FormControl(null,Validators.required),
    raisedOn: new FormControl(null, Validators.required),
    uatstaus: new FormControl(null, Validators.required),
    failurereason: new FormControl(null, Validators.required),
    actiontobetaken: new FormControl(null, Validators.required),
    uploadedfile: new FormControl(null)
  });

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(public dialog: MatDialog, private uatservice : UatService, private http: HttpClient) { }

  ngOnInit() {
  }

  
  
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddrowUatComponent, {
      width: '500px',
      height: '300px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
    addRowData(row_obj){
      var d = new Date();
      console.log('in table', row_obj);
      this.dataSource.push({
        id:d.getTime(),
        tcode:row_obj.tcode,
        stepsforexecution:row_obj.stepsforexecution,
        outputresult:row_obj.outputresult,
        expectedresult:row_obj.expectedresult,
        status:row_obj.status
      });
      this.table.renderRows();
    }
    updateRowData(row_obj){
      this.dataSource = this.dataSource.filter((value,key)=>{
        if(value.id == row_obj.id){
          value.tcode = row_obj.tcode;
          value.stepsforexecution = row_obj.stepsforexecution;
          value.expectedresult = row_obj.expectedresult;
          value.outputresult = row_obj.outputresult;
          value.status = row_obj.status;
        }
        return true;
        
      });
    }
    deleteRowData(row_obj){
      this.dataSource = this.dataSource.filter((value,key)=>{
        return value.id != row_obj.id;
      });
    }
    // file upload
    selectedFile: File = null;
    onFileSelected(event) {
      this.selectedFile = <File>event.target.files[0];
      this.uatForm.patchValue({
        uploadedfile : this.selectedFile
      });
      //console.log(event);
    }

    
    onSubmit(){
   
      if(this.uatForm.invalid){
        console.log('invalid',this.uatForm);
             return;
      }
      else{
   
       // console.log(uat);
       // console.log("datasource", this.dataSource);
        for( let i = 0; i < this.dataSource.length; i++){
          let testscriptobj = {
            tcode : this.dataSource[i].tcode,
            steps : this.dataSource[i].stepsforexecution,
            exp_result :  this.dataSource[i].expectedresult,
            out_result :  this.dataSource[i].outputresult,
            status:  this.dataSource[i].status,
            remark :  this.dataSource[i].id
          }
          this.uatTestScript.push(testscriptobj);
          console.log('submit function for loop', 'i=',i,testscriptobj);
        }
       var date = new Date();
       const fd = new FormData();
       fd.append('file', this.selectedFile, this.selectedFile.name);

       //console.log('Selected File' + this.selectedFile);
       //console.log(fd.get('uploadedfile'));

       const uat = { 
         uatNo: '',
         uatSerialNo: null,
         processId : 'UT',
         reqBy: 'SS004700',
         ticketNo: Number(this.uatForm.value.ticketno),
         component: this.uatForm.value.component,
         priority: this.uatForm.value.priority,
         raisedon: this.uatForm.value.raisedOn,
         testScript: this.uatTestScript,   // CR – Change Request, BF – Bug Fixing
         uatStatus: this.uatForm.value.uatStatus,
         raisedOn: this.uatForm.value.raisedOn,
         reason: this.uatForm.value.failurereason,
         action: this.uatForm.value.actiontobetaken,
         file: fd,
         reqDate : date,
         reqTime : date.toLocaleTimeString(),
         department : 'B&T'
       }  
       
        this.uatservice.postUat(uat)
        .subscribe((data: PostResponse)=>{
           const resData = data;
           console.log("success:", resData);
           this.respMessage = "Request submiited Successfully. Your request Id : " + resData.reqNo + " & Workflow Id : " + resData.workflowId;
         },
         (error : any) => {
           console.log('on error : ', error)
           this.respMessage = "Error: " + error.statusText + error.message;
         });
       } 
       
      // this.uatservice.postFile(fd)
      // .subscribe(response => {
      //   console.log(response);
      // })
  
    }
  }

