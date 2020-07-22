import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapRequestsComponent } from './sap-requests.component';

describe('SapRequestsComponent', () => {
  let component: SapRequestsComponent;
  let fixture: ComponentFixture<SapRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
