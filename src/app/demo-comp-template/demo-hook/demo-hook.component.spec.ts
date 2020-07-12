import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHookComponent } from './demo-hook.component';

describe('DemoHookComponent', () => {
  let component: DemoHookComponent;
  let fixture: ComponentFixture<DemoHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
