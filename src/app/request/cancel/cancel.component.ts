import { Component, OnInit, ViewChild } from '@angular/core';
import { MyAssetService } from '../../services/my-asset.service';
import { MyAsset } from '../../model/myAsset';
import { ConditionPosition } from 'ag-grid-community/dist/lib/filter/provided/simpleFilter';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


export interface PeriodicElement {
  sno: number;
  type: string;
  model: string;
  no: string;
  useBy: string;
  //highlighted: boolean;
  //hovered: boolean;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    { sno:1, type : 'Desktop', model : 'Dell 780', no: '50001457', useBy: 'Self'},
    { sno:2, type : 'Laptop', model : 'Thinkpad', no: '6969969', useBy: 'Self'},
    { sno:3, type : 'Printer', model : 'HP 7080', no: '47747747', useBy: 'Self'},
    { sno:4, type : 'SAP BO ', model : 'Lumira', no: '465457', useBy: 'Self'},
      
  ];

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})

export class CancelComponent {

  public myAssets; 
  public myRecordset = new Array;

//*******8******************************* */

/* for retriving data from asset Services */
/* and directly sending it to mat-table   */
dataSourceObs = new AssetDataSource(this.myAsset);

/* for retriving data from asset Services */
/* and binding it with a MatTableDataSource Object   */

dataSourceBoth = new MatTableDataSource<MyAsset>();

/* for showing data from the hard codeed Array  */

dataSource : MatTableDataSource<PeriodicElement>;

/************************************** */
/*
  //@ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
  columnDefs = [
    { headerName: 'Asset Type', field: 'type', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Asset Number', field: 'no', sortable: true, filter: true },
    { headerName: 'Used By', field: 'useBy', sortable: true, filter: true }
  ];

  rowData = [];
  */

  selection : SelectionModel<MyAsset>;
  displayedColumns : string[] = ['select','type', 'model','no','useBy'];
  
  slectedRecords = new Array();

  constructor(private myAsset: MyAssetService) {}

  ngOnInit() {

    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.selection = new SelectionModel<MyAsset>(true, []);

    //this.myAsset.getMyAssets()
      //          .subscribe(data  => {this.myRecordset = data});

    this.myAsset.getMyAssets()
                .subscribe(data  => {
                  this.dataSourceBoth.data = data
                  console.log(data)
                });

    // this.myAsset.getMyAssets()
    //    .subscribe(data => this.myAssets = data);

    //this.rowData = this.myAsset.getMyAssetsNormal();

    //console.log("rowdata",this.rowData);
    // console.log("data from node " + this.rowData + 'dsfsdfs');
    //for(let i= 0; i < this.rowData.length; i++ ) {
      //this.rowData[i].checked = false;
      //this.dataSource.push(this.rowData);
    //}

    //console.log(this.dataSource);
    //this.dataSource = this.myAsset.getMyAssetsNormal();
  
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceBoth.data.length;
    const numRowsObs = this.myRecordset.length;
    return numSelected === numRows;
    
  } 

  masterToggle($event) {
    /*
    if ($event.checked) {
      this.onCompleteRow(this.dataSource);
    }

*/
    // this.isAllSelected() ?
    //     this.selection.clear() : {
          
    //     }
    //     selectAll();
      if( this.isAllSelected()){
        this.selection.clear();
        this.slectedRecords.splice(0,this.slectedRecords.length);
      }
      else {
        this.dataSourceBoth.data.forEach(row => this.selection.select(row));
        this.slectedRecords.splice(0,this.slectedRecords.length);
        this.dataSourceBoth.data.forEach(row => this.slectedRecords.push(row));  
      }
 
/*  
    if ($event.checked) {
       this.myRecordset.forEach( row => this.selection.select(row));
      }
  
 */
  }
  selectAll(){
       this.dataSourceBoth.data.forEach(row => this.selection.select(row));
       this.slectedRecords.splice(0,this.slectedRecords.length);
       this.dataSourceBoth.data.forEach(row => this.slectedRecords.push(row));
       
    }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.model + 1}`;
  }

  selectRow($event, dataSource) {
    // console.log($event.checked);
     if ($event.checked) {
       this.slectedRecords.push(dataSource);
       console.log("inside select row",dataSource);
     }
     else{
      for( var i = 0; i < this.slectedRecords.length; i++)
          { 
          if ( this.slectedRecords[i] ==  dataSource){ 
            this.slectedRecords.splice(i, 1); }
          }
         }

    

    }

    onCompleteRow(dataSource) {
      dataSource.data.forEach(element => { 
        console.log(element);
      });
  }

  onReturn(){
    let returnAssetes: string = "";
    for(let i = 0; i<this.slectedRecords.length; i++){
      console.log(returnAssetes);
      if (returnAssetes !== null){
      returnAssetes = returnAssetes + "\n" + this.slectedRecords[i].type + ' - ' + this.slectedRecords[i].model;
    }
      
    }
    if (window.confirm('Do you want to retun the below items' + returnAssetes )){
       
    }
    console.log(returnAssetes);
  }
  onCancel()
  {}
}

export class AssetDataSource extends DataSource<any> {

  constructor(private myAsset: MyAssetService) {
    super();
  }
  connect(): Observable<MyAsset[]> {
    return this.myAsset.getMyAssets();
  }
  disconnect() {}
  
}