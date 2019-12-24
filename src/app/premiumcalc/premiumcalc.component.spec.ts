import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumcalcComponent } from './premiumcalc.component';

describe('PremiumcalcComponent', () => {
  let component: PremiumcalcComponent;
  let fixture: ComponentFixture<PremiumcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumcalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
