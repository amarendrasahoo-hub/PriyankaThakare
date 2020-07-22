import { ViewChild, Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient,  HttpClientModule, HttpParams  } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs/operators';
import { ReqRaised } from '../model/req-raised'
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AdminComponent {
  public data: ReqRaised[];
  displayedColumns = ['process_type', 'process_id', 'req_by', 'description', 'approver_comments' ];
  dataSource = new MatTableDataSource<ReqRaised>();
  elementData: ReqRaised[];  
  tempElementData: any;
  isExpansionDetailRow = (i: number, row: Object) => {
    //console.log(row);
    return row.hasOwnProperty('detailRow');
  } 
  expandedElement: any;
  messageSuccess: boolean;
  iremarks: string;

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild('sort', { static: true }) sort: MatSort;


  ngOnInit() {
    //this.dataSource = new MatTableDataSource(this.data);

    //this.dataSource.sort = this.sort;
    // this.dataSource.sortingDataAccessor = (item, property) => {

    //   let newItem;
    //   if (item.element !== undefined)
    //     newItem = item.element;
    //   else
    //     newItem = item; 

    //   console.log(this.tempElementData); 
    //   let foundElement;
      
    //   if (item.element !== undefined)
    //     foundElement = this.tempElementData.find(i => i.element !== undefined && item.element.name === i.element.name);
    //   else 
    //     foundElement = this.tempElementData.find(i => item.name === i.name);

    //   let index = this.tempElementData.indexOf(foundElement);
    //   console.log("foundElement: " + JSON.stringify(item) + " " + +index);
    //   return +index;
    // }
  }
  constructor(private http: HttpClient, private loginService: LoginService) { 
    loginService.getAdminData().subscribe(
      res => {
        this.data = res;
        this.dataSource = new MatTableDataSource(this.data);
      }
    );
    
  }
  getData(){
    this.loginService.getAdminData()
    .subscribe(response => {
       //this.data = response
      console.log(this.data)
    });
  }
  getRows() { 
    const rows = [];
    this.data.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return rows;
  }

  toggleRow(value: ReqRaised) {
    const foundElement = this.dataSource.data.find(elem => elem.element !== undefined && elem.element === value.process_id)    
    console.log("The found element is " + JSON.stringify(foundElement));
    const index = this.dataSource.data.indexOf(foundElement);
    this.dataSource.data[index].element.show = !this.dataSource.data[index].element.show;
  }
  approveRequest(remarks: string, expandedRow: ReqRaised){
    console.warn(remarks, expandedRow.process_id);
    setTimeout(()=>{    //<<<---    using ()=> syntax
    this.toggleRow(expandedRow)}, 3000);
    this.iremarks = '';
  }
  rejectRequest(remarks: string, expandedRow: ReqRaised){
    console.warn('rejected ' + expandedRow.process_id + ' because of ' + remarks);
    this.toggleRow(expandedRow);
    this.iremarks = '';
  }
  

}







