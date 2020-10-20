import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent, FooterComponent, HeaderComponent],
  exports: [MenuComponent, FooterComponent, HeaderComponent],
  imports: [
  CommonModule,
    RouterModule
  ]
})
export class AppCommonModule { }
