import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { WorkFlowDialogComponent } from './workflow-dialog.component'
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { WorkflowService } from '../services/workflow.service';
import { Workflow } from '../model/workflow';
import { MatTableDataSource } from '@angular/material';
import { WorkflowResponse } from '../model/workflowResponse';
import { UpdateWorkflow } from '../model/updateWorkflow';



export interface PeriodicElement {
  position: number;
  wf_id: string;
  process_id : string;
  description: string;
  reqBy: string;
  raisedOn: string;
  icon: string;
}

export interface DialogData{
  description: string;
  riasedBy: string;
}

const element_data: PeriodicElement[] = [
  // {position: 1, id: '5456225', description: 'Desktop', raisedBy: 'Amarendra', raisedOn: '01.02.2020', icon : 'reorder'},
  // {position: 2, id: '6386524', description: 'Change Request', raisedBy: 'Priyamvad', raisedOn: '31.12.2020', icon : 'reorder'},
  // {position: 3, id: '8985854', description: 'USB Access', raisedBy: 'Priyanka', raisedOn: '22.12.2019', icon : 'reorder'},
  // {position: 4, id: '2335648', description: 'ShareFolder', raisedBy: 'Debopam', raisedOn: '18.05.2020', icon : 'reorder'},
  // {position: 5, id: '4556832', description: 'Laptop', raisedBy: 'Shikha', raisedOn: '01.03.2020', icon : 'reorder'},      
];


//workFlowDialogRef: MatDialogRef<WorkFlowDialogComponent>;


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})


export class WorkflowComponent implements OnInit {

  constructor(private dialog: MatDialog,private workflowService : WorkflowService) { }

public myWorkflows = [];
public newdatasource = [] ;
MyDataSource: any; 
ApprovalMessage = '';

data : { id: string,
         name :string, 
         for: string
        }  
  comments : string;
  action: string;
  workflowData : Workflow;
  dataSource = element_data;


  workFlowDialogRef : MatDialogRef<WorkFlowDialogComponent>;

  ngOnInit() {

    this.workflowService.getWorkflow('1234')
    .subscribe(
      (data) => {
        this.MyDataSource = new MatTableDataSource(); 
        this.myWorkflows = data;
        console.log("type of newdatasource", typeof(this.newdatasource), typeof(this.dataSource));
        console.log("My Workflow", this.myWorkflows[5] );
        let processDescription  = '';
        for(let i = 0; i < this.myWorkflows.length; i++ ){
         
          switch(this.myWorkflows[i].process_type) {
            case 'WM':
              processDescription = 'WebMail Access'
              break;
            case 'HS':
              processDescription = 'Hardware/Software'
              break;
            case 'UP':
              processDescription = 'USB/Pend Drive Access'
              break; 
            case 'SF':
              processDescription = 'Share Folder Access'
              break;  
            default:
              // code block
          }
          //console.log(processDescription,this.myWorkflows[i])
          let newWorkFlow = {
            position : i + 1,
            wf_id : this.myWorkflows[i].wf_id,
            process_id : this.myWorkflows[i].process_id,                
            description : processDescription,
            reqBy : this.myWorkflows[i].reqBy,
            raisedOn : this.myWorkflows[i].user_asn_dt,
            icon : 'reorder'
          }
          //{position: 1, id: '5456225', description: 'Desktop', raisedBy: 'Amarendra', raisedOn: '01.02.2020', icon : 'reorder'
          //console.log(this.myWorkflows[i].process_id);
          this.dataSource.push(newWorkFlow);

        }
        this.MyDataSource.data = this.dataSource;
        console.log("New Datasource",this.MyDataSource);
        console.log("Datasource",this.dataSource);
      
      },
      (error : any) => {
        console.log( "Error in accessing workflowdata", error);
      }
    )

    
  }

  displayedColumns : string[] = ['position', 'wf_id','process_id','description','reqBy','raisedOn','details'];
  
  
  redirectToDetails(element) {
   
   this.data = {       id : element.wf_id,
                       name : element.reqBy,
                       for: element. description }



  this.workFlowDialogRef = this.dialog.open(WorkFlowDialogComponent, 
    {
      hasBackdrop : true,
      data : this.data
    });  

   this.workFlowDialogRef.afterClosed()
          .subscribe(
              result => { 
                console.log('The dialog is closed');
                this.comments = result.comments;
                this.action = result.action;
                console.log(result, element.wf_id,element.process_id);
                if (this.action == 'A'){
                   element.icon = 'check_circle';
                  // call update Workflow service
                   let workflowdata = {
                    worklfow_id : element.wf_id,
                    process_type: element.process_id,
                    process_id: element.process_id,
                    user : 'SS004700',
                    user_dept : 'B&T',
                    action: 'A',
                    comments : this.comments
                   }
                   console.log('calling service', workflowdata);
                   this.workflowService.updateWorkflow(workflowdata)
                   .subscribe( (resp : WorkflowResponse) => {
                     console.log(resp);
                     if (resp.completed == true  ){
                      this.ApprovalMessage = "Wrokflow " + resp.workflowId + " is approved by You";
                     }
                     else{
                      this.ApprovalMessage = "Wrokflow " + resp.workflowId + " is approved by You..! The next Approver is " + resp.nextApprover;
                     }
                    },
                    (error : any ) => {
                      console.log(error);
                    }
                   )

                  }
                else if (this.action == 'R') {
                  element.icon = 'cancel'
                }
                // icon = cancel for rejection
              }
            ) 
 
  }

}

