import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseredittestComponent } from './useredittest.component';

describe('UseredittestComponent', () => {
  let component: UseredittestComponent;
  let fixture: ComponentFixture<UseredittestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseredittestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseredittestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
