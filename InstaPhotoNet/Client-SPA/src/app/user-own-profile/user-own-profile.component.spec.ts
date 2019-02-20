import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOwnProfileComponent } from './user-own-profile.component';

describe('UserOwnProfileComponent', () => {
  let component: UserOwnProfileComponent;
  let fixture: ComponentFixture<UserOwnProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOwnProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOwnProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
