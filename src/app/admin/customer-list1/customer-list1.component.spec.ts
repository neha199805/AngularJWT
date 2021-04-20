import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerList1Component } from './customer-list1.component';

describe('CustomerList1Component', () => {
  let component: CustomerList1Component;
  let fixture: ComponentFixture<CustomerList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
