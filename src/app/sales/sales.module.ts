import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';

import { SalesComponent } from './sales.component';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    AppCommonModule
  ]
})
export class SalesModule { }
