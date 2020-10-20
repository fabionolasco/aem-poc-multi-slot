import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';

import { HomepageComponent } from './homepage.component';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
  CommonModule,
    AppCommonModule
  ]
})
export class HomepageModule { }
