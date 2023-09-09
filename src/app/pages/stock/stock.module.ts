import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StocksComponent } from './stocks/stocks.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    StocksComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class StockModule { }
