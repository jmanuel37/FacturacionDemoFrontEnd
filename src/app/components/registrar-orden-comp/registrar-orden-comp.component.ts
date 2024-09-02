import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenService } from 'src/app/services/orden.service';
import { Orden } from 'src/app/models/orden.model';

@Component({
  selector: 'app-registrar-orden-comp',
  templateUrl: './registrar-orden-comp.component.html',
  styleUrls: ['./registrar-orden-comp.component.css']
})
export class RegistrarOrdenCompComponent implements OnInit {

  orden :Orden = new Orden();
  
  constructor(private ordenService:OrdenService,private router:Router) { }
  
  ngOnInit(): void {
    //  console.log(this.empleado);
  }

  guardarOrdenesCompra(){
    this.ordenService.registrarOrdenes(this.orden).subscribe((dato: any) =>{
      console.log(dato);
      this.irAlaListaOrdenesCompra();
    },(error: any) => console.log(error));
  }

  irAlaListaOrdenesCompra(){
    this.router.navigate(['/orden']);
   // swal('Orden Compra registrado',`El ID ${this.orden.idOrdCompra} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
   //   console.log(this.orden);
    this.guardarOrdenesCompra();
  }


}
