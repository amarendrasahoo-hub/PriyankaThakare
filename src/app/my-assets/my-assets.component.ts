import { Component, OnInit } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { MyAssetService } from '../services/my-asset.service';
import { MyAsset } from '../model/myAsset';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';




@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.css']
})
export class MyAssetsComponent implements OnInit {

  public myAssets;// = assets;
 
  constructor(private myAsset: MyAssetService) {
    this.myAsset.getMyAssets()
             .subscribe(
              data => { 
              this.myAssets = data
              console.log(data)
             });
  }

  ngOnInit() {
    
  }
}
