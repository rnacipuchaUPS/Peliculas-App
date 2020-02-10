import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';
import { RouterModule } from '@angular/router';
import { ModulosModule } from 'src/app/modulos/modulos.module';

@NgModule({
  imports: [
    ModulosModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
