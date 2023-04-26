import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDriveListViewComponent } from './my-drive-list-view.component';

describe('MyDriveListViewComponent', () => {
  let component: MyDriveListViewComponent;
  let fixture: ComponentFixture<MyDriveListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDriveListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDriveListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
