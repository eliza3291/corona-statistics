import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GermanyOverviewComponent } from './germany-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { GermanyMapModule, TimeframeSelectorModule } from '@shared';
import { GermanyService } from 'src/app/common/services';
import { HttpClientModule } from '@angular/common/http';

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
  imports: [CommonModule, RouterModule.forChild(routes), GermanyMapModule, HttpClientModule, TimeframeSelectorModule],
  declarations: [GermanyOverviewComponent],
  providers: [GermanyService]
})
export class GermanyOverviewModule {}
