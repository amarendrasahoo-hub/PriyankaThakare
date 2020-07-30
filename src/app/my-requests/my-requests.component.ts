import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MyRequestsService } from '../services/my-requests.service';
import { Observable } from 'rxjs';
import { MyRequests } from '../model/myRequests';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  sno: number;
  req_no: number;
  process_id: string;
  asset_type: string;
  reason: string;
  req_date: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [];
  // {"_id":"5efdaa53c2b11444131d79a1",
  // "req_no":"HS1111111172",
  // "req_serial_no":1111111172,
  // "process_id":"HS",
  // "req_by":"SS04700",
  // "use_by":"self",
  // "req_ret_flag":"req",
  // "asset_cat":"hardware",
  // "asset_type":"desktop",
  // "quantity":"1",
  // "reason":"official",
  // "req_date":"01.07.2020","req_time":"","department":"B&T","__v":0,"workflow_id":"7000065"},

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  public myRequests; 
  public myRecordset = new Array;

//*******8******************************* */

/* for retriving data from req Services */
/* and directly sending it to mat-table   */
dataSourceObs = new MyRequestsDataSource(this.reqService);

/* for retriving data from asset Services */
/* and binding it with a MatTableDataSource Object   */

dataSourceBoth = new MatTableDataSource<MyRequests>();

/* for showing data from the hard codeed Array  */

dataSource : MatTableDataSource<PeriodicElement>;
displayedColumns : string[] = [ 'reqno', 'processid', 'assettype', 'reason', 'reqdate'];
  
  constructor(private reqService: MyRequestsService) {}

  ngOnInit() {

    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.reqService.getMyRequests()
                .subscribe(data  => {
                  this.dataSourceBoth.data = data
                  console.log(data)
                });
              }
}

export class MyRequestsDataSource extends DataSource<any> {

  constructor(private myRequestsService: MyRequestsService) {
    super();
  }
  connect(): Observable<MyRequests[]> {
    return this.myRequestsService.getMyRequests();
  }
  disconnect() {}
  
}

