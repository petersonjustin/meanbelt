import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoCreateComponent } from './uno-create.component';

describe('UnoCreateComponent', () => {
  let component: UnoCreateComponent;
  let fixture: ComponentFixture<UnoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
