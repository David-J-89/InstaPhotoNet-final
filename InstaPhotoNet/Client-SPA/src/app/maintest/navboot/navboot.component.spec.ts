import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbootComponent } from './navboot.component';

describe('NavbootComponent', () => {
  let component: NavbootComponent;
  let fixture: ComponentFixture<NavbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
