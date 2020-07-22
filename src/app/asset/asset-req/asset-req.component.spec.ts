import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetReqComponent } from './asset-req.component';

describe('AssetReqComponent', () => {
  let component: AssetReqComponent;
  let fixture: ComponentFixture<AssetReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
