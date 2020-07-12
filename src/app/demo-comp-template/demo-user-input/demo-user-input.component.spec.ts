import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUserInputComponent } from './demo-user-input.component';

describe('DemoUserInputComponent', () => {
  let component: DemoUserInputComponent;
  let fixture: ComponentFixture<DemoUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
