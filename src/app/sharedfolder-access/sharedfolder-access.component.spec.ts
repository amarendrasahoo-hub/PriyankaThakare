import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedfolderAccessComponent } from './sharedfolder-access.component';

describe('SharedfolderAccessComponent', () => {
  let component: SharedfolderAccessComponent;
  let fixture: ComponentFixture<SharedfolderAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedfolderAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedfolderAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
