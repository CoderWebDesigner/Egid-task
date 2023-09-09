import { Component, OnInit, inject } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Order } from 'src/app/@core/interfaces/order';
import { OrderService } from 'src/app/@shared/services/order/order.service';
import { OrderEditorComponent } from '../../component/order-editor/order-editor.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  _OrderService = inject(OrderService);
  _modalService = inject(BsModalService);
  orders!:Order[]
  start: number = 0;
  end: number = 8;
  bsModalRef?: BsModalRef;
  ngOnInit(): void {
    this.getOrders()
  }
  getOrders(){
    this._OrderService.getOrders().subscribe({
      next:(res:any)=>{
        this.orders=res
      }
    })
  }
  orderTrackBy(index: number) {
    return index;
  }
  pageChanged(event: any) {
    this.start = event?.page== 1 ? 0 : (event?.page*event?.itemsPerPage)-8;
    this.end = event?.page*event?.itemsPerPage;
  }
  openModal(){
    this.bsModalRef = this._modalService.show(OrderEditorComponent);
  }
}
