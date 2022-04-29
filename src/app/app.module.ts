import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersPRComponent } from './components/orders-pr/orders-pr.component';
import { OrdersItemPRComponent } from './components/orders-item-pr/orders-item-pr.component';
import { OrdersDetailsPRComponent } from './components/orders-details-pr/orders-details-pr.component';
import {PRDataService} from "./services/pr-data.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    OrdersPRComponent,
    OrdersItemPRComponent,
    OrdersDetailsPRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    PRDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
