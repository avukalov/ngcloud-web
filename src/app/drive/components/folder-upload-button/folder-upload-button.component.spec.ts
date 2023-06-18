import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderUploadButtonComponent } from './folder-upload-button.component';

describe('FolderUploadButtonComponent', () => {
  let component: FolderUploadButtonComponent;
  let fixture: ComponentFixture<FolderUploadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderUploadButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderUploadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
