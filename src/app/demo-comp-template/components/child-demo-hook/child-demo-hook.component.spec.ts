import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemoHookComponent } from './child-demo-hook.component';

describe('ChildDemoHookComponent', () => {
  let component: ChildDemoHookComponent;
  let fixture: ComponentFixture<ChildDemoHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDemoHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDemoHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
