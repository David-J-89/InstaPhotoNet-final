import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdropdownComponent } from './navdropdown.component';

describe('NavdropdownComponent', () => {
  let component: NavdropdownComponent;
  let fixture: ComponentFixture<NavdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
