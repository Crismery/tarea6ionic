import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetectorEdadPageRoutingModule } from './detector-edad-routing.module';

import { DetectorEdadPage } from './detector-edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetectorEdadPageRoutingModule
  ],
  declarations: [DetectorEdadPage]
})
export class DetectorEdadPageModule {}
