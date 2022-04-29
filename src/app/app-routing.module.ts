import { NgModule } from '@angular/core';
import {Routes } from '@angular/router';
import {OrdersPRComponent} from "./components/orders-pr/orders-pr.component";
import {OrdersDetailsPRComponent} from "./components/orders-details-pr/orders-details-pr.component";
import {RouterModule} from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: OrdersPRComponent
  },
  {
    path: 'orders/detail/:id',
    component: OrdersDetailsPRComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
