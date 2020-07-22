import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmailAccessComponent } from './webmail-access.component';

describe('WebmailAccessComponent', () => {
  let component: WebmailAccessComponent;
  let fixture: ComponentFixture<WebmailAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebmailAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmailAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
