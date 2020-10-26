import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDataBindingComponent } from './demo-data-binding.component';

describe('DemoTempSyntaxComponent', () => {
  let component: DemoDataBindingComponent;
  let fixture: ComponentFixture<DemoDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
