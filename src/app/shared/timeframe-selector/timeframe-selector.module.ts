import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimeframeSelectorComponent } from './timeframe-selector.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TimeframeSelectorComponent],
  exports: [TimeframeSelectorComponent]
})
export class TimeframeSelectorModule {}
