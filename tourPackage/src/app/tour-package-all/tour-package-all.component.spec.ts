import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPackageAllComponent } from './tour-package-all.component';

describe('TourPackageAllComponent', () => {
  let component: TourPackageAllComponent;
  let fixture: ComponentFixture<TourPackageAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourPackageAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPackageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


