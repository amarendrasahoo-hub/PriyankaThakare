import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PostResponse } from '../model/post-response';
import { uat } from '../model/uat.model'


@Injectable({
  providedIn: 'root'
})


export class UatService {
  private fileurl = 'https://59.145.135.45:3000/assets/filetest';
  private url = 'https://59.145.135.45:3000/assets/uat/create';
  constructor(private http : HttpClient) { }

  postUat(uatObject: uat, file: FormData){//: Observable<PostResponse>{
    console.log('in service', uatObject)
    this.http.post(this.url, uatObject)
    .subscribe(
      (data: PostResponse) => {
        console.log("success:", data.reqNo);

        //file.append('uatNo', data.reqNo.toString());
        //console.log(file.get('uatNo'));
        this.http.post(this.fileurl, {'file': file, 'uatNo': data.reqNo.toString()}  )
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error: any) => {
            console.log("error in filetest : ", error);
          }
        )
      },
      (error: any) => {
        console.log("on error in UAT: ", error);
      }
    );
    return
  }

  postFile(file: FormData){
    console.log('in file function service' , file.get('file'));
    return this.http.post(this.fileurl, file);
  }
}
