import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent, DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ]
})
export class ModulosModule { }
/*
@NgModule({
  entryComponents: [SlideshowBackdropComponent,  SlideshowParesComponent, SlideshowPosterComponent, DetalleComponent],
  declarations: [SlideshowBackdropComponent,  SlideshowParesComponent, SlideshowPosterComponent, DetalleComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SlideshowBackdropComponent, SlideshowParesComponent, SlideshowPosterComponent, DetalleComponent]
})
export class ModulosModule { }*/
