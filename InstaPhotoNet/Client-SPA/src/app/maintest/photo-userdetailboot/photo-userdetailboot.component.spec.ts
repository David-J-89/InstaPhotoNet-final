import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUserdetailbootComponent } from './photo-userdetailboot.component';

describe('PhotoUserdetailbootComponent', () => {
  let component: PhotoUserdetailbootComponent;
  let fixture: ComponentFixture<PhotoUserdetailbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUserdetailbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUserdetailbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
