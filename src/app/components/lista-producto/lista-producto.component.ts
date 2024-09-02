import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model'; 
import { ProductoService } from 'src/app/services/producto.service'; 
@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent {
 // id:number;
  productos:Producto[];
  //empleado:Empleado = new Empleado();

  constructor(private productoService:ProductoService,private router:Router) { }

  ngOnInit(): void { 
    this.obtenerProductos();
  }

  private obtenerProductos(){
     this.productoService.obtenerListaDeProductos().subscribe(dato =>{
       this.productos=dato;
 
     });    
    }

    actualizarProducto(id:number){
      this.router.navigate(['actualizarProducto',id]);
  
    }
    
    eliminarProducto(id:number){
      this.productoService.eliminarProducto(id).subscribe((dato: any) =>{
        console.log(dato);
        this.obtenerProductos();
  
      });
    }

    
    verDetallesProducto(id:number){
      this.router.navigate(['detalleProducto',id]);
  
    }

}
