import { NeFooterModule } from './../../../components/ne-footer/ne-footer.module';
import { IconModule } from 'ng-devui/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingWinComponent } from './setting-win.component';
import { LayoutModule } from 'ng-devui';

@NgModule({
  declarations: [SettingWinComponent],
  imports: [CommonModule, NeFooterModule, LayoutModule, IconModule],
})
export class SettingWinModule {}
