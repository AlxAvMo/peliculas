import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [DetalleComponent,
                SlideshowBackdropComponent,
                SlideshowParesComponent,
                SlideshowPosterComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }
