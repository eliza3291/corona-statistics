import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', redirectTo: '/overview', pathMatch: 'full' },
      {
        path: 'overview',
        loadChildren: () => import('./germany-overview/germany-overview.module').then((m) => m.GermanyOverviewModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/overview'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
