import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PostResponse } from '../model/post-response';
import { uat } from '../model/uat.model'


@Injectable({
  providedIn: 'root'
})


export class UatService {
  private fileurl = 'http://59.145.135.45:3000/assets/filetest';
  private url = 'http://59.145.135.45:3000/assets/uat/create';
  constructor(private http : HttpClient) { }

  postUat(uatObject : uat): Observable<PostResponse>{
    console.log('in service', uatObject)
    return this.http.post<PostResponse>(this.url, uatObject);
  }

  postFile(file: FormData){
    console.log('in file function service' , file.get('file'));
    return this.http.post(this.fileurl, file);
  }
}
