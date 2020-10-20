import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageModule } from './homepage/homepage.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { ServicesModule } from './services/services.module';

import { AppCommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule,
    CommonModule,
    AppRoutingModule,
    HomepageModule,
    ProductsModule,
    SalesModule,
    ServicesModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
