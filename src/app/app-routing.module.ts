import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ListaOrdenCompComponent } from './components/lista-orden-comp/lista-orden-comp.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { RegistrarOrdenCompComponent } from './components/registrar-orden-comp/registrar-orden-comp.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';

const routes: Routes = [
  {path : 'orden',component:ListaOrdenCompComponent},
  {path : '',redirectTo:'orden',pathMatch:'full'},
  {path : 'registrarOrden',component:RegistrarOrdenCompComponent},
  {path : 'producto',component:ListaProductoComponent},
  {path : 'registrarProducto',component:RegistrarProductoComponent},
  {path : 'actualizarProducto/:id',component:ActualizarProductoComponent},
  {path : 'detalleProducto/:id',component:DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
