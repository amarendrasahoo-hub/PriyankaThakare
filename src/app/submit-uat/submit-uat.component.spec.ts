import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitUatComponent } from './submit-uat.component';

describe('SubmitUatComponent', () => {
  let component: SubmitUatComponent;
  let fixture: ComponentFixture<SubmitUatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitUatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitUatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
