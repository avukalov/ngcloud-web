import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDriveToolbarComponent } from './my-drive-toolbar.component';

describe('MyDriveToolbarComponent', () => {
  let component: MyDriveToolbarComponent;
  let fixture: ComponentFixture<MyDriveToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDriveToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDriveToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
