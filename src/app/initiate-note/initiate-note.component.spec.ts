import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateNoteComponent } from './initiate-note.component';

describe('InitiateNoteComponent', () => {
  let component: InitiateNoteComponent;
  let fixture: ComponentFixture<InitiateNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiateNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
