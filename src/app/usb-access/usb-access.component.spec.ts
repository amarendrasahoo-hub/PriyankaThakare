import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbAccessComponent } from './usb-access.component';

describe('UsbAccessComponent', () => {
  let component: UsbAccessComponent;
  let fixture: ComponentFixture<UsbAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsbAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsbAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
