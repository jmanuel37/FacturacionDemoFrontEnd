import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private httpClient : HttpClient ) { }

  private baseURL="http://localhost:8006/apiProducto/ProductoList";
  private baseURLInser="http://localhost:8006/apiProducto/crearProducto";
  private baseURLUpdate="http://localhost:8006/apiProducto/actualizarProducto";
  private baseURLDeta="http://localhost:8006/apiProducto/producto";
  private baseURLDelete="http://localhost:8006/apiProducto/borrarProducto";
  
  // este metodo nos sirve para obtener los producto 
  obtenerListaDeProductos() : Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
}
  // este metodo nos sirve para registrar un producto
  registrarProductos(producto:Producto):Observable<Object>{
    return this.httpClient.post(`${this.baseURLInser}`,producto);
  }

  // este metodo sirve para actualizar el Producto
  actualizarProducto(id:number,producto:Producto):Observable<Object>{
    return this.httpClient.put(`${this.baseURLUpdate}/${id}`,producto);
  }

  // este metodo sirve para obtener o buscar un Producto
  obtenerEmpleadoPorId(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURLDeta}/${id}`);
  }
 // eliminar Producto
  eliminarProducto(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURLDelete}/${id}`);
  }

 
}
