import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DemoReactiveComponent} from './demo-reactive.component';

describe('DemoReactiveComponent', () => {
  let component: DemoReactiveComponent;
  let fixture: ComponentFixture<DemoReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
