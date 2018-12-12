import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LitteredPlacesPage } from './littered-places';

@NgModule({
  declarations: [
    LitteredPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(LitteredPlacesPage),
  ],
})
export class LitteredPlacesPageModule {}
