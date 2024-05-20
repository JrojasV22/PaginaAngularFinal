import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { TargetasComponent } from './targetas/targetas.component';
import { OfertasComponent } from './ofertas/ofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContenedorComponent,
    TargetasComponent,
    OfertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
