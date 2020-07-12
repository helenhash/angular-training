import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTempSyntaxComponent } from './demo-temp-syntax.component';

describe('DemoTempSyntaxComponent', () => {
  let component: DemoTempSyntaxComponent;
  let fixture: ComponentFixture<DemoTempSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTempSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTempSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
