import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetail02Component } from './user-detail02.component';

describe('UserDetail02Component', () => {
  let component: UserDetail02Component;
  let fixture: ComponentFixture<UserDetail02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetail02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetail02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
