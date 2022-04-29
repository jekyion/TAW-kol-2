import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPRComponent } from './orders-pr.component';

describe('OrdersPRComponent', () => {
  let component: OrdersPRComponent;
  let fixture: ComponentFixture<OrdersPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
