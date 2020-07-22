import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssetRequest } from '../../model/assetRequest';
import { MyAssetService } from 'src/app/services/my-asset.service';
import { AssetReqComponent } from 'src/app/asset/asset-req/asset-req.component';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { LoginService } from 'src/app/services/login.service';
import { PostResponse } from 'src/app/model/post-response';

export interface user {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent implements OnInit {

  public message = "";
  users: user[] = [
    {value: 'self', viewValue: 'Self' },
    {value: 'vendor', viewValue: 'Vendor'},
    {value: 'auditor', viewValue: 'Auditors'}
  ];

  public assetRequset : AssetRequest = {
    reqNo : 'S1232',
    reqBy: 'Amarendra',
    reqRetflag : 'ret',
    processId: 'software',
    assetType: 'laptop',
    quantity: 1, 
    reason: 'sdada',
    reqDate: null,
    reqTime: '',
    workflowId: 'd'
      };
  public hardwares = [ 'Desktop', 'Monitor', 'Printer', 'Scanner', 'Laptop'];
  public softwares = [ 'SAP', 'Afsys', 'Danaos', 'Lotus Notes', 'MS Office'];
  public assets = this.hardwares.slice();

  public userid: string;

  public hardsoftForm: FormGroup = new FormGroup({
    useBy: new FormControl( null, Validators.required),
    assetCat: new FormControl(null, Validators.required),
    asset: new FormControl(null, Validators.required),
    quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
    reason: new FormControl(null, [Validators.required, Validators.minLength(5)])
  });
  respMessage= '';

  constructor(private myAsset : MyAssetService, private loginService: LoginService ) { }

  ngOnInit() {
    console.log(this.assets);
  }


  get useBy() { return this.hardsoftForm.get('useBy'); }
  get assetCat() { return this.hardsoftForm.get('assetCat'); }
  get asset() { return this.hardsoftForm.get('asset'); }
  get quantity() { return this.hardsoftForm.get('quantity'); }
  get reason() { return this.hardsoftForm.get('reason'); }

  selecthardwares() { this.assets = this.hardwares.slice(); }
  selectsoftwares() { this.assets = this.softwares.slice(); }

  
onSubmit(){
  console.log(this.hardsoftForm)
  var curr_date = new Date(); 
  var today = curr_date.toLocaleDateString();
  var time = curr_date.toLocaleTimeString();
  const assetRequest = {
    reqNo: '',
    userid: '4700',
    reqBy: '',
    reqRetflag: '',
    processId: '',
    useBy: this.hardsoftForm.value.useBy,
    assetCat : this.hardsoftForm.value.assetCat,
    assetType: this.hardsoftForm.value.asset,
    quantity: this.hardsoftForm.value.quantity,
    reason: this.hardsoftForm.value.reason,
    reqDate: curr_date,
    reqTime: time,
    workflowId: '',
    department : 'B&T'
  };
  // this.assetRequset.reqNo = 'AT';
  // this.userid = this.loginService.getUserId();
  // this.assetRequset.reqBy = this.userid;
  // this.assetRequset.reqRetflag = 'req';
  // this.assetRequset.processId = 'hardsoft';
  // this.assetRequset.assetType = this.hardsoftForm.value.assetType;
  // this.assetRequset.quantity = this.hardsoftForm.value.quantity;
  // this.assetRequset.reason = this.hardsoftForm.value.reason;
  // this.assetRequset.reqDate = curr_date;
  // this.assetRequset.reqTime = time;
  // this.assetRequset.workflowId = 'A12345';

  console.log(assetRequest);
    
  this.myAsset.postMyAsset(assetRequest)
  .subscribe((data: PostResponse) => { 
    const resData = data;
    console.log("success:", resData);
    this.respMessage = "Request submiited Successfully. Your request Id : " + resData.reqNo + " & Workflow Id : " + resData.workflowId;
  },
  (error: any) => {
    console.log('on error : ', error)
    this.respMessage = "Error: " + error.statusText + error.message;
   });
  }
}
