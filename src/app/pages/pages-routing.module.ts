import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'stocks',loadChildren:()=>import('./stock/stock.module').then(m=>m.StockModule)},
  {path:'orders',loadChildren:()=>import('./order/order.module').then(m=>m.OrderModule)},
  {path:'',redirectTo:'stocks',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
