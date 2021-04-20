import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaByidComponent } from './pizza-byid.component';

describe('PizzaByidComponent', () => {
  let component: PizzaByidComponent;
  let fixture: ComponentFixture<PizzaByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaByidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
