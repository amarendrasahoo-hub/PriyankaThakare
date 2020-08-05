import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SharedfolderRequest } from '../model/sharedfolder-request';
import { PostResponse } from '../model/post-response';

@Injectable({
  providedIn: 'root'
})
export class SharedfolderService {

  private url = 'https://59.145.135.45:3000/assets/sharefolder/create';

  constructor(private http: HttpClient) { }
  
  postSharedFolderAccessReq(sharedfolderreqobj: SharedfolderRequest): Observable<PostResponse>  {
    console.log(sharedfolderreqobj);
    return this.http.post<PostResponse>(this.url, sharedfolderreqobj);
  } 
}
