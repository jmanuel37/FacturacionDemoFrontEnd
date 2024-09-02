import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto.model'; 
@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {
  producto :Producto = new Producto();
  
  constructor(private productoService:ProductoService,private router:Router) { }
  
  ngOnInit(): void {
    //  console.log(this.empleado);
  }
  guardarProducto(){
    this.productoService.registrarProductos(this.producto).subscribe((dato: any) =>{
      console.log(dato);
      this.irAlaListaProducto();
    },(error: any) => console.log(error));
  }

  irAlaListaProducto(){
    this.router.navigate(['/producto']);
   // swal('Orden Compra registrado',`El ID ${this.orden.idOrdCompra} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
   //   console.log(this.orden);
    this.guardarProducto();
  }

}
