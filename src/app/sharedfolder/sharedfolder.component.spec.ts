import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedfolderComponent } from './sharedfolder.component';

describe('SharedfolderComponent', () => {
  let component: SharedfolderComponent;
  let fixture: ComponentFixture<SharedfolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedfolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
