import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { BreadcrumbComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CoreComponent, BreadcrumbComponent],
  exports: [CoreComponent]
})
export class CoreModule {}
