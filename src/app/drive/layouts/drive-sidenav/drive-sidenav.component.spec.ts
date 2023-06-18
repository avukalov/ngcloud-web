import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveSidenavComponent } from './drive-sidenav.component';

describe('DriveSidenavComponent', () => {
  let component: DriveSidenavComponent;
  let fixture: ComponentFixture<DriveSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
