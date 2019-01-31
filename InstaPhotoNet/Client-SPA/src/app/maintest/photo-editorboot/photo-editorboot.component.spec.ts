import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoEditorbootComponent } from './photo-editorboot.component';

describe('PhotoEditorbootComponent', () => {
  let component: PhotoEditorbootComponent;
  let fixture: ComponentFixture<PhotoEditorbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoEditorbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoEditorbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
