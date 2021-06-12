import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCountriesPageRoutingModule } from './detail-countries-routing.module';

import { DetailCountriesPage } from './detail-countries.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCountriesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [DetailCountriesPage]
})
export class DetailCountriesPageModule {}
