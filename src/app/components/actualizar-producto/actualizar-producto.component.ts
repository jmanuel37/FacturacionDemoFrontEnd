import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import  swal  from 'sweetalert2';
import { ProductoService } from 'src/app/services/producto.service'; 
import { Producto } from 'src/app/models/producto.model';
//import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  id:number;
  //empleado:Empleado = new Empleado();
  producto :Producto = new Producto();
  constructor(private productoService:ProductoService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.obtenerEmpleadoPorId(this.id).subscribe((dato: any) =>{
      this.producto = dato;
    },(error: any) => console.log(error));
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/producto']);
    //Swal.fire('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);

  }

  onSubmit(){
    this.productoService.actualizarProducto(this.id,this.producto).subscribe(dato => { 
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }

}
