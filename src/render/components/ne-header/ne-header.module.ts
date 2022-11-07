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
import { NeToolsSettingComponent } from './ne-tools-setting/ne-tools-setting.component';
import { NeToolsHelpComponent } from './ne-tools-help/ne-tools-help.component';
import { NeToolsGitComponent } from './ne-tools-git/ne-tools-git.component';
import { DropDownModule } from 'ng-devui/dropdown';
import { NeToolsUserComponent } from './ne-tools-user/ne-tools-user.component';

@NgModule({
  declarations: [NeHeaderComponent, NeToolsThemeComponent, NeToolsSettingComponent, NeToolsHelpComponent, NeToolsGitComponent, NeToolsUserComponent],
  imports: [CommonModule, TabsModule, IconModule, ButtonModule, PopoverModule, TooltipModule, RadioModule, FormsModule, DropDownModule],
  exports: [NeHeaderComponent],
})
export class NeHeaderModule {}
