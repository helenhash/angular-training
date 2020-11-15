import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DemoCompInteractionComponent} from './demo-comp-interaction.component';

describe('DemoCompInteractionComponent', () => {
  let component: DemoCompInteractionComponent;
  let fixture: ComponentFixture<DemoCompInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCompInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCompInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
