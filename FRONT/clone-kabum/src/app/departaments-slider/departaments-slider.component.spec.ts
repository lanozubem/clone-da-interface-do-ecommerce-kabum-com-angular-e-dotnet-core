import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentsSliderComponent } from './departaments-slider.component';

describe('DepartamentsSliderComponent', () => {
  let component: DepartamentsSliderComponent;
  let fixture: ComponentFixture<DepartamentsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
