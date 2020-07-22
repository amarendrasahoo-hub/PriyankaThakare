import { Injectable } from '@angular/core';
import { Asset } from '../model/asset';
import { Observable } from 'rxjs';
import { HttpClient,  HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  public assets: Asset[] = [ new Asset ('hardware', 'Laptop', 10, 'joining')];

  constructor( private http: HttpClient) { }

  getAssetObservable(): Observable<Asset[]> {
    return this.http.get<Asset[]>('http://localhost:3000');
  }
  getAsset(): Asset[] {
    return this.assets;
  }
  createAssetObservable( asset: Asset ): Observable<any> {
   return this.http.post('http://localhost:3000', asset);
    // this.assets.push(asset);
  }
  createAsset(asset: Asset) {
   this.assets.push(asset);
  }
}
