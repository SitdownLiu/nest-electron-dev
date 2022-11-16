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
import { ToggleModule } from 'ng-devui/toggle';
import { SettingBaseComponent } from './setting-base/setting-base.component';
import { SettingAccountComponent } from './setting-account/setting-account.component';
import { SettingVersionComponent } from './setting-version/setting-version.component';
import { SettingAboutComponent } from './setting-about/setting-about.component';
@NgModule({
  declarations: [
    SettingWinComponent,
    SettingThemeComponent,
    SettingBaseComponent,
    SettingAccountComponent,
    SettingVersionComponent,
    SettingAboutComponent,
  ],
  imports: [CommonModule, NeFooterModule, LayoutModule, IconModule, FormModule, FormsModule, RadioModule, ToggleModule],
  providers: [NeThemeService],
})
export class SettingWinModule {}
