import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';

import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    AppCommonModule
  ]
})
export class ServicesModule { }
