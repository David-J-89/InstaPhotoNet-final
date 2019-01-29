import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEdit02Component } from './user-edit02.component';

describe('UserEdit02Component', () => {
  let component: UserEdit02Component;
  let fixture: ComponentFixture<UserEdit02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEdit02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEdit02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
