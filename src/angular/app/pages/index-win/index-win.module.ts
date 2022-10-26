import { AccordionModule } from 'ng-devui/accordion';
import { LayoutModule } from 'ng-devui/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexWinComponent } from './index-win.component';
import { ButtonModule } from 'ng-devui/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [IndexWinComponent],
  imports: [CommonModule, LayoutModule, AccordionModule, ButtonModule, FontAwesomeModule],
})
export class IndexWinModule {}
