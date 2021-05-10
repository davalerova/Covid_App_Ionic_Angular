import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCountriesPage } from './detail-countries.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCountriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCountriesPageRoutingModule {}
