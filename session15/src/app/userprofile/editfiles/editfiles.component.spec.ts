import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfilesComponent } from './editfiles.component';

describe('EditfilesComponent', () => {
  let component: EditfilesComponent;
  let fixture: ComponentFixture<EditfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
