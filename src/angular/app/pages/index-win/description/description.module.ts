import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DescriptionComponent],
  imports: [CommonModule, HttpClientModule, MarkdownModule.forChild()],
})
export class DescriptionModule {}
