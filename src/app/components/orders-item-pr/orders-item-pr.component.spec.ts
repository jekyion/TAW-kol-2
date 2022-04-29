import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemPRComponent } from './orders-item-pr.component';

describe('OrdersItemPRComponent', () => {
  let component: OrdersItemPRComponent;
  let fixture: ComponentFixture<OrdersItemPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemPRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
