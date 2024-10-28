import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{IncioComponent} from "./inicio/inicio.component";
import { ContactoComponent } from './contacto/contacto.component';
import { ServicioComponent } from './servicio/servicio.component';
import { BlogComponent } from './blog/blog.component'
@NgModule({
  declarations: [
    AppComponent,
    IncioComponent,
    ContactoComponent,
    ServicioComponent,
    BlogComponent
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
