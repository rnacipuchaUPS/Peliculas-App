import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';
import { RouterModule } from '@angular/router';
import { ModulosModule } from 'src/app/modulos/modulos.module';
@NgModule({
  imports: [
    CommonModule,
    ModulosModule,
    FormsModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
    //Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
