import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UsbRequest } from '../model/usb-request';
import { PostResponse } from '../model/post-response';

@Injectable({
  providedIn: 'root'
})
export class UsbaccessService {
  private url = 'https://59.145.135.45:3000/assets/usb/create';

  constructor(private http: HttpClient) { }

  postUsbAccessReq(usbreqobj: UsbRequest): Observable<PostResponse>  {
    console.log("inside service : ", usbreqobj)
    return this.http.post<PostResponse>(this.url, usbreqobj);
  } }
