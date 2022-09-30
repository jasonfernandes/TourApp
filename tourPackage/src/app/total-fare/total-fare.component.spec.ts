import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFareComponent } from './total-fare.component';

describe('TotalFareComponent', () => {
  let component: TotalFareComponent;
  let fixture: ComponentFixture<TotalFareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalFareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
