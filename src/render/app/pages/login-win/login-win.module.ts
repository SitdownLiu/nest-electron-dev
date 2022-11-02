import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'ng-devui/button';
import { LayoutModule } from 'ng-devui/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWinComponent } from './login-win.component';
import { IconModule } from 'ng-devui/icon';
import { FormsModule } from '@angular/forms';
import { FormModule } from 'ng-devui/form';
import { ToastModule } from 'ng-devui/toast';
import { CheckBoxModule } from 'ng-devui';

@NgModule({
  declarations: [LoginWinComponent],
  imports: [CommonModule, FontAwesomeModule, FormModule, LayoutModule, FormsModule, ButtonModule, IconModule, ToastModule, CheckBoxModule],
})
export class LoginWinModule {}
