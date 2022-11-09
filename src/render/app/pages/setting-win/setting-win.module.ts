import { NeThemeService } from './../../../services/ne-theme.service';
import { NeFooterModule } from './../../../components/ne-footer/ne-footer.module';
import { IconModule } from 'ng-devui/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingWinComponent } from './setting-win.component';
import { LayoutModule } from 'ng-devui';
import { SettingThemeComponent } from './setting-theme/setting-theme.component';
import { FormModule } from 'ng-devui/form';
import { FormsModule } from '@angular/forms';
import { RadioModule } from 'ng-devui';
@NgModule({
  declarations: [SettingWinComponent, SettingThemeComponent],
  imports: [CommonModule, NeFooterModule, LayoutModule, IconModule, FormModule, FormsModule, RadioModule],
  providers: [NeThemeService],
})
export class SettingWinModule {}
