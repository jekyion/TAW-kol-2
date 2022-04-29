import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsPRComponent } from './orders-details-pr.component';

describe('OrdersDetailsPRComponent', () => {
  let component: OrdersDetailsPRComponent;
  let fixture: ComponentFixture<OrdersDetailsPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsPRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
