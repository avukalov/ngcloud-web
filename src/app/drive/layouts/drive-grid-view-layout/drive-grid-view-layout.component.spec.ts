import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveGridViewLayoutComponent } from './drive-grid-view-layout.component';

describe('DriveGridViewLayoutComponent', () => {
  let component: DriveGridViewLayoutComponent;
  let fixture: ComponentFixture<DriveGridViewLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveGridViewLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveGridViewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
