import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeMenusComponent } from './ne-menus.component';
import { AccordionModule } from 'ng-devui/accordion';

@NgModule({
  declarations: [NeMenusComponent],
  imports: [CommonModule, AccordionModule],
  exports: [NeMenusComponent],
})
export class NeMenusModule {}
