import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecrComponent } from './createcr.component';

describe('CreatecrComponent', () => {
  let component: CreatecrComponent;
  let fixture: ComponentFixture<CreatecrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
