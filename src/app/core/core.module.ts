import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { SidebarComponent, BreadcrumbComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CoreComponent, SidebarComponent, BreadcrumbComponent],
  exports: [CoreComponent]
})
export class CoreModule {}
