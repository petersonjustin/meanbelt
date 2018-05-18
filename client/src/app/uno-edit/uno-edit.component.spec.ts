import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoEditComponent } from './uno-edit.component';

describe('UnoEditComponent', () => {
  let component: UnoEditComponent;
  let fixture: ComponentFixture<UnoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
