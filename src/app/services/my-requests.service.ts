import { Injectable } from '@angular/core';
import { MyAsset } from '../model/myAsset';
import { AssetRequest } from '../model/assetRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable} from 'rxjs';
import { PostResponse } from '../model/post-response';
import { MyRequests } from '../model/myRequests';


@Injectable({
  providedIn: 'root'
})


export class MyRequestsService {

  private url = 'http://59.145.135.45:3000/assets/hardsoft/display';
  
  constructor(private http: HttpClient) { }

  getMyRequests(): Observable<MyRequests[]> {
    console.log('inside service ', this.http.get<MyAsset[]>(this.url));
    return this.http.get<MyRequests[]>(this.url);
   }
}