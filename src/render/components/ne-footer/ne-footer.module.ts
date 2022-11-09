import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeFooterComponent } from './ne-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NeFooterComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NeFooterComponent],
})
export class NeFooterModule {}
