import { Component, OnInit, Injector } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testmat',
  templateUrl: './testmat.component.html',
  styleUrls: ['./testmat.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TestmatComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private loginservice: LoginService) {}
  //appTestListService = this.injector.get(LoginService);
  //appTestListService = new LoginService(this.http,this.router)
  dataSource = new AppTestListDataSource(this.loginservice);

  displayedColumns = ['process_type', 'process_id', 'req_by', 'description', 'approver_comments' ];
  appTestLists: AppTestList[];
  loading = true;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  ngOnInit() {
  }

}

export class AppTestListDataSource extends DataSource<any> {
  constructor(private appTestListService: LoginService) {
    super();
  }
  connect(): Observable<AppTestList[]> {
    const rows = [];
    this.appTestListService.getHeroes().subscribe(val=>{
      val.forEach(element => rows.push(element, { detailRow: true, element }));
      console.log(rows)
    })
    return of(rows);
  }
  disconnect() { }
}



export interface AppTestList {
  process_type: string;
    process_id: string;
    req_by: string;
    description: string;
    approver_comments: string;
}
