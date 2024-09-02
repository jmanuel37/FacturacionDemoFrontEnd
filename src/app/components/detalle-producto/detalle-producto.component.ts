import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model'; 
import { ProductoService } from 'src/app/services/producto.service'; 

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  id:number;
  producto:Producto;
  constructor(private router:ActivatedRoute,private productoService:ProductoService) { }
 
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.producto=new Producto();
    this.productoService.obtenerEmpleadoPorId(this.id).subscribe((dato: any) =>{
    this.producto=dato;
  });
  }
}
