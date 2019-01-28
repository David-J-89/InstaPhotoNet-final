import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtestComponent } from './navtest.component';

describe('NavtestComponent', () => {
  let component: NavtestComponent;
  let fixture: ComponentFixture<NavtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
