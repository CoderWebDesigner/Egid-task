import { Component, OnInit, inject } from '@angular/core';
import { Observable, interval, switchMap } from 'rxjs';
import { Stock } from 'src/app/@core/interfaces/stock';
import { StocksService } from 'src/app/@shared/services/stocks/stocks.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { OrderEditorComponent } from '../../component/order-editor/order-editor.component';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  _StockService = inject(StocksService);
  _modalService = inject(BsModalService);
  stocks: Stock[] = [];
  start: number = 0;
  end: number = 8;
  bsModalRef?: BsModalRef;

  openModal(stock:Stock) {
    const initialState: ModalOptions = {
      initialState: {
        stock: stock,
      }
    };
    this.bsModalRef = this._modalService.show(OrderEditorComponent, initialState);
  }
  ngOnInit(): void {
    this.getStocks()
    interval(10000).subscribe({
      next: res => {
        this.getStocks()
      }
    })
  }
  getStocks() {
    this._StockService.getStocks().subscribe({
      next: (res: Stock[]) => {
        this.stocks = res;
      }
    })
  }
  priceTrackBy(index: number) {
    return index;
  }
  pageChanged(event: any) {
    this.start = event?.page== 1 ? 0 : (event?.page*event?.itemsPerPage)-8;
    this.end = event?.page*event?.itemsPerPage;
  }
}
