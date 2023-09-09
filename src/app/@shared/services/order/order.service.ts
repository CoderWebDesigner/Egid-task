import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/@core/interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new BehaviorSubject<Order[]>([])
  constructor() { }
  setOrders(order: Order) {
    const currentValue = this.orders.value;
    const updatedValue = [...currentValue, order];
    this.orders.next(updatedValue)
  }
  getOrders() {
    return this.orders.asObservable()
  }
}
