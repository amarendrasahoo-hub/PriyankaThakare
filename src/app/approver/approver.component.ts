import { ViewChild, Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ApproverComponent {
  adminData: Admin[] = [];
  displayedColumns = ['process_type', 'process_id', 'req_by'];
  dataSource: MatTableDataSource<any>;
  elementData: Admin[];  
  tempElementData: any;
  isExpansionDetailRow = (i: number, row: Object) => {
    console.log(i,row,row.hasOwnProperty('detailRow'));
    return row.hasOwnProperty('detailRow');
  } 
  expandedElement: any;
  messageSuccess: boolean;
  iremarks: string;

   //@ViewChild(MatSort, ) sort: MatSort;
   @ViewChild(MatSort, {static: true}) sort: MatSort;
  // @ViewChild('sort', { static: true }) sort: MatSort;
  constructor(private loginservice: LoginService){
  }

  ngOnInit() {
    this.loginservice.getAdminData().subscribe((responsedata) => {
    this.adminData = responsedata;

    const rows = [];
    this.adminData.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log('ROWS',rows);
    this.dataSource = new MatTableDataSource(rows);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
            let newItem;
      if (item.element !== undefined)
        newItem = item.element;
      else
        newItem = item; 
  
      console.log(this.tempElementData); 
      let foundElement;
        
      if (item.element !== undefined)
        foundElement = this.tempElementData.find(i => i.element !== undefined && item.element.req_by === i.element.req_by);
      else 
        foundElement = this.tempElementData.find(i => item.req_by  === i.req_by );
  
      let index = this.tempElementData.indexOf(foundElement);
      console.log("foundElement: " + JSON.stringify(item) + " " + +index);
      return +index;
      }
    });
    
    // 
  }

  getRows() { 
    console.log('adminData in getrows',this.adminData)
    const rows = [];
    this.adminData.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log('ROWS',rows);
    return rows;
  }
  toggleRow(value: Admin) {
    const foundElement = this.dataSource.data.find(elem => elem.element !== undefined && elem.element.req_by === value.req_by)    
    console.log("The found element is " + JSON.stringify(foundElement));
    const index = this.dataSource.data.indexOf(foundElement);
    this.dataSource.data[index].show = !this.dataSource.data[index].show;
    for(let i=0; i<= this.dataSource.data.length; i++){
      if(i != index){
      this.dataSource.data[i].show = false;
      }
    }
  }
  approveRequest(remarks: string, expandedRow: Admin){
    console.warn(remarks, expandedRow.description);
    setTimeout(()=>{    //<<<---    using ()=> syntax
    this.toggleRow(expandedRow)}, 3000);
    this.iremarks = '';
  }
  rejectRequest(remarks: string, expandedRow: Admin){
    console.warn('rejected ' + expandedRow.description + ' because of ' + remarks);
    this.toggleRow(expandedRow);
    this.iremarks = '';
  }
}

// const data: Admin[] = [
//   // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', show: false },
//   // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', show: false },
//   // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', show: false },
//   // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', show: false },
//   // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', show: false },
//   // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', show: false },
//   // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', show: false },
//   // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', show: false },
//   // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', show: false },
//   // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', show: false },
//   // { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', show: false },
//   // { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', show: false },
//   // { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', show: false },
//   // { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', show: false },
//   // { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', show: false },
//   // { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', show: false },
//   // { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', show: false },
//   // { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', show: false },
//   // { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', show: false },
//   // { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', show: false },
// ];


