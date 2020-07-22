import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrowUatComponent } from './addrow-uat.component';

describe('AddrowUatComponent', () => {
  let component: AddrowUatComponent;
  let fixture: ComponentFixture<AddrowUatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrowUatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrowUatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
