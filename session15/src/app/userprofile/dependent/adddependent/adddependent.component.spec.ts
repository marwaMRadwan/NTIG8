import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddependentComponent } from './adddependent.component';

describe('AdddependentComponent', () => {
  let component: AdddependentComponent;
  let fixture: ComponentFixture<AdddependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
