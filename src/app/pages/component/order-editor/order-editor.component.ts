import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Stock } from 'src/app/@core/interfaces/stock';
import { OrderService } from 'src/app/@shared/services/order/order.service';
import { StocksService } from 'src/app/@shared/services/stocks/stocks.service';

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.scss']
})
export class OrderEditorComponent {
  _bsModalRef = inject(BsModalRef);
  _StockService = inject(StocksService);
  _orderService = inject(OrderService);
  stock!:Stock;
  stocks!:Stock[]
  orderForm!:FormGroup;
  ngOnInit(): void {
    this.initForm()
    if(!this.stock){
      this.getStocks()
    }
  }
  initForm(){
    this.orderForm = new FormGroup({
      stockId: new FormControl(''),
      price: new FormControl(''),
      stock:new FormControl(null),
      quantity: new FormControl('',[Validators.required]),
      personName: new FormControl('',[Validators.required])
    })
    this.setFormData()
  }
  setFormData(){
    this.orderForm.patchValue({
      stockId: this.stock?.ID,
      price: this.stock?.Price
    })

  }
  getStocks(){
    this._StockService.getStocks().subscribe({
      next:res=>{
        this.stocks=res
      }
    })
  }
  submit(){
    this._bsModalRef.hide()
    let model = this.orderForm.value
    console.log(model)
    if(!this.stock){
      model.stockId=model.stock?.ID
      model.price=model.stock?.Price;
    }
    delete model.stock
    this._orderService.setOrders(model)
  }
}
