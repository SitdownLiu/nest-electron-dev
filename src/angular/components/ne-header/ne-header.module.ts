import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeHeaderComponent } from './ne-header.component';
import { TabsModule } from 'ng-devui/tabs';
import { IconModule } from 'ng-devui/icon';

@NgModule({
  declarations: [NeHeaderComponent],
  imports: [CommonModule, TabsModule, IconModule],
  exports: [NeHeaderComponent],
})
export class NeHeaderModule {}
