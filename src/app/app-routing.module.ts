import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { MisionComponent } from './componentes/mision/mision.component';
import { VisionComponent } from './componentes/vision/vision.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: "",component:HomeComponent, pathMatch:'full'},
  {path: "mision",component:MisionComponent, pathMatch:'full'},
  {path: "vision",component:VisionComponent, pathMatch:'full'},
  {path: "registro",component:RegistroComponent, pathMatch:'full'},
  {path: "producto",component:ProductoComponent, pathMatch:'full'},
  {path: "contactenos",component:ContactenosComponent, pathMatch:'full'},
  {path: "login",component:LoginComponent, pathMatch:'full'},
  {path: "**",component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
