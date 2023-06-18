import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveListViewLayoutComponent } from './drive-list-view-layout.component';

describe('DriveListViewLayoutComponent', () => {
  let component: DriveListViewLayoutComponent;
  let fixture: ComponentFixture<DriveListViewLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveListViewLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveListViewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
