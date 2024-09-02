import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orden } from '../models/orden.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private httpClient : HttpClient ) { }

  private baseURL="http://localhost:8006/apiCompras/comprasList";
  private baseURLP="http://localhost:8006/apiCompras/crearOrdenCompra";

  // este metodo nos sirve para obtener los Ordenes 
  obtenerListaDeOrdenes() : Observable<Orden[]>{
    return this.httpClient.get<Orden[]>(`${this.baseURL}`);
}
  // este metodo nos sirve para registrar un Orden Compra
  registrarOrdenes(orden:Orden):Observable<Object>{
    return this.httpClient.post(`${this.baseURLP}`,orden);
  }
}
