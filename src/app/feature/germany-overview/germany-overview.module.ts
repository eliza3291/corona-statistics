import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GermanyOverviewComponent } from './germany-overview.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GermanyOverviewComponent,
    data: {
      title: 'Germany Overview'
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [GermanyOverviewComponent]
})
export class GermanyOverviewModule {}
