import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredictorGeneroPageRoutingModule } from './predictor-genero-routing.module';

import { PredictorGeneroPage } from './predictor-genero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredictorGeneroPageRoutingModule
  ],
  declarations: [PredictorGeneroPage]
})
export class PredictorGeneroPageModule {}
