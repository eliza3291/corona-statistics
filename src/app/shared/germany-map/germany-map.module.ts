import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GermanyMapComponent } from './germany-map.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GermanyMapComponent],
  exports: [GermanyMapComponent]
})
export class GermanyMapModule {}
