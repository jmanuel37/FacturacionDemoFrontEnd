import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaOrdenCompComponent } from './components/lista-orden-comp/lista-orden-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrarOrdenCompComponent } from './components/registrar-orden-comp/registrar-orden-comp.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaOrdenCompComponent,
    RegistrarOrdenCompComponent,
    ListaProductoComponent,
    RegistrarProductoComponent,
    ActualizarProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
