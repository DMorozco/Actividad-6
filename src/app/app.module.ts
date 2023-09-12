import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { MisionComponent } from './componentes/mision/mision.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VisionComponent } from './componentes/vision/vision.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MisionComponent,
    VisionComponent,
    ContactenosComponent,
    HomeComponent,
    RegistroComponent,
    ProductoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
