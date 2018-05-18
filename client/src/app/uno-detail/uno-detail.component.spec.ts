import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoDetailComponent } from './uno-detail.component';

describe('UnoDetailComponent', () => {
  let component: UnoDetailComponent;
  let fixture: ComponentFixture<UnoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
