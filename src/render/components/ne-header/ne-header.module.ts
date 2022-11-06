import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeHeaderComponent } from './ne-header.component';
import { TabsModule } from 'ng-devui/tabs';
import { IconModule } from 'ng-devui/icon';
import { NeToolsThemeComponent } from './ne-tools-theme/ne-tools-theme.component';
import { PopoverModule } from 'ng-devui/popover';
import { ButtonModule } from 'ng-devui/button';
import { TooltipModule } from 'ng-devui/tooltip';
import { RadioModule } from 'ng-devui';

@NgModule({
  declarations: [NeHeaderComponent, NeToolsThemeComponent],
  imports: [CommonModule, TabsModule, IconModule, ButtonModule, PopoverModule, TooltipModule, RadioModule, FormsModule],
  exports: [NeHeaderComponent],
})
export class NeHeaderModule {}
