import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarDepartamentoComponent } from './modulos/parametrizacion/departamento/listar-departamento/listar-departamento.component';
import { CrearDepartamentoComponent } from './modulos/parametrizacion/departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './modulos/parametrizacion/departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './modulos/parametrizacion/departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarCiudadComponent } from './modulos/parametrizacion/ciudad/listar-ciudad/listar-ciudad.component';
import { CrearCiudadComponent } from './modulos/parametrizacion/ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './modulos/parametrizacion/ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './modulos/parametrizacion/ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { ListarHabilidadComponent } from './modulos/parametrizacion/habilidad/listar-habilidad/listar-habilidad.component';
import { CrearHabilidadComponent } from './modulos/parametrizacion/habilidad/crear-habilidad/crear-habilidad.component';
import { EditarHabilidadComponent } from './modulos/parametrizacion/habilidad/editar-habilidad/editar-habilidad.component';
import { EliminarHabilidadComponent } from './modulos/parametrizacion/habilidad/eliminar-habilidad/eliminar-habilidad.component';
import { ListarProfesionComponent } from './modulos/parametrizacion/profesion/listar-profesion/listar-profesion.component';
import { CrearProfesionComponent } from './modulos/parametrizacion/profesion/crear-profesion/crear-profesion.component';
import { EditarProfesionComponent } from './modulos/parametrizacion/profesion/editar-profesion/editar-profesion.component';
import { EliminarProfesionComponent } from './modulos/parametrizacion/profesion/eliminar-profesion/eliminar-profesion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarDepartamentoComponent,
    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent,
    ListarCiudadComponent,
    CrearCiudadComponent,
    EditarCiudadComponent,
    EliminarCiudadComponent,
    ListarHabilidadComponent,
    CrearHabilidadComponent,
    EditarHabilidadComponent,
    EliminarHabilidadComponent,
    ListarProfesionComponent,
    CrearProfesionComponent,
    EditarProfesionComponent,
    EliminarProfesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
