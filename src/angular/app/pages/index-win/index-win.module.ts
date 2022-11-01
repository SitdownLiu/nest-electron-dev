import { NeMenusModule } from './../../../components/ne-menus/ne-menus.module';
import { DescriptionModule } from './description/description.module';
import { IndexWinRoutingModule } from './index-win-routing.module';
import { AccordionModule } from 'ng-devui/accordion';
import { LayoutModule } from 'ng-devui/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexWinComponent } from './index-win.component';
import { ButtonModule } from 'ng-devui/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [IndexWinComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    IndexWinRoutingModule,
    LayoutModule,
    AccordionModule,
    ButtonModule,
    FontAwesomeModule,
    DescriptionModule,
    NeMenusModule,
  ],
})
export class IndexWinModule {}
