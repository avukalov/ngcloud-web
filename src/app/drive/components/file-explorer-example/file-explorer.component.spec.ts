import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFileplorerComponent } from './file-explorer.component';

describe('ExFileplorerComponent', () => {
  let component: ExFileplorerComponent;
  let fixture: ComponentFixture<ExFileplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExFileplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExFileplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
