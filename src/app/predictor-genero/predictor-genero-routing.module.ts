import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictorGeneroPage } from './predictor-genero.page';

const routes: Routes = [
  {
    path: '',
    component: PredictorGeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredictorGeneroPageRoutingModule {}
