import { Injectable } from '@angular/core';
import { MyAsset } from '../model/myAsset';
import { AssetRequest } from '../model/assetRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable} from 'rxjs';
import { PostResponse } from '../model/post-response';



@Injectable({
  providedIn: 'root'
})


export class MyAssetService {

  private url = 'https://59.145.135.45:3000/assetDet/angular_myasset1';
  // private urlpost = 'http://nodefilemanagement-env.eba-md56muk4.ap-south-1.elasticbeanstalk.com/assets/hardsoft/create';
  private urlpost = 'https://59.145.135.45:3000/assets/hardsoft/create';
  public abc = [];
  myassetnormal: any;
  constructor(private http: HttpClient) { }

  getMyAssets(): Observable<MyAsset[]> {
    console.log('inside service ', this.http.get<MyAsset[]>(this.url ))
  return this.http.get<MyAsset[]>(this.url);
   }

  getMyAssetsNormal(){
    this.myassetnormal = this.http.get(this.url);
    return this.myassetnormal;
  }
 
  postMyAsset(asset: AssetRequest): Observable<PostResponse>  {
    //console.log(asset)
    return this.http.post<PostResponse>(this.urlpost, asset);
  } 

}
