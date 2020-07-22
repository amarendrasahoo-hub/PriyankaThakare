import { Component, OnInit } from '@angular/core';
import { Asset } from '../../model/asset';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AssetService } from '../../services/asset.service';


@Component({
  selector: 'app-asset-req',
  templateUrl: './asset-req.component.html',
  styleUrls: ['./asset-req.component.css']
})
export class AssetReqComponent implements OnInit {
 
  //public reason: String = "";
  public asset: Asset;
  public assets: Asset[];
  public message = null;
  public hardwares = ['Desktop', 'Monitor','Printer','Scanner','Laptop']; 
  public softwares = [ 'SAP', 'Afsys', 'Danaos', 'Lotus Notes', 'MS Office'] 
  public assetcats = this.hardwares.slice();

  public assetForm: FormGroup = new FormGroup({
    assetCat: new FormControl(null, Validators.nullValidator),
    assetType: new FormControl(null, Validators.required),
    quantity: new FormControl(0, [Validators.required,Validators.min(1)]),
    reason: new FormControl(null,[Validators.required, Validators.minLength(5)])
  })


  constructor( private assetService: AssetService) { }

  ngOnInit() {
    this.asset = new Asset('hardware','Laptop',10,'joining');
    console.log(this.asset);
    let assetModel = Object.assign({}, this.asset);
    this.assetForm.patchValue(assetModel);
    console.log(this.asset);
  }

  get assetCat(){ return this.assetForm.get('assetCat')}

  get assetType(){ return this.assetForm.get('assetType')}

  get quantity(){ return this.assetForm.get('quantity')}

  get reason(){ return this.assetForm.get('reason')}

  onSubmit(){
    this.asset = Object.assign({}, this.assetForm.value);
    console.log("Assset created : ", this.asset); 
    
    this.assetService.createAsset(this.asset);

    /*this.assetService.createAssetObservable(this.asset)
        .subscribe( (result: any) => { 
          this.message = result.msg;
        },(err) => {
          this.message = err.error.msg;
        },

        )
        */
    }

resetForm(){
  this.assetForm.reset();
}

selectassets(){
  console.log("value passed : " ,this.assetForm.value.assetCat);
  /*console.log(, assetcat.toString);
  
  if(assetcat == 'hardware'){
    this.assetcats = this.hardwares; 
  }
 else if(assetcat == 'software') {
    this.assetcats = this.softwares;
  }
}
*/
  if ( this.assetForm.value.assetCat == 'hardware'){

    this.assetcats = this.hardwares.slice(); 
  }
  else if(this.assetForm.value.assetCat == 'software') {
    this.assetcats = this.softwares.slice();
  }
  console.log(this.assetcats);
}

selecthardwares(){

  this.assetcats = this.hardwares.slice(); 
}

selectsoftwares(){

  this.assetcats = this.softwares.slice(); 
}

displayall(){
this.assets = this.assetService.getAsset();
console.log("from service : ", this.assets);
}
}
