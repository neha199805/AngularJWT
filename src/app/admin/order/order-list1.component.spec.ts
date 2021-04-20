import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderList1Component } from './order-list1.component';

describe('OrderList1Component', () => {
  let component: OrderList1Component;
  let fixture: ComponentFixture<OrderList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
