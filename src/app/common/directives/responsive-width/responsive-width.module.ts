import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResponsiveWidthDirective } from './responsive-width.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ResponsiveWidthDirective],
  exports: [ResponsiveWidthDirective]
})
export class ResponsiveWidthModule {}
