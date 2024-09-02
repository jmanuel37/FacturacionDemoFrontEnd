import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Orden } from 'src/app/models/orden.model';
import { OrdenService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-lista-orden-comp',
  templateUrl: './lista-orden-comp.component.html',
  styleUrls: ['./lista-orden-comp.component.css']
})


export class ListaOrdenCompComponent {
  ordens:Orden[];
  constructor(private ordenService:OrdenService,private router:Router) { }
  /*
  ngOnInit(): void { 
    this.ordens=[{
    "idOrdCompra":"1",
    "idCliente":1,
    "nombrecliente":"jose",
    "fecha":"31/08/24",
    "descripcion_orden":"todo bien",
    "total":10
    },
    {
      "idOrdCompra":"2",
      "idCliente":2,
      "nombrecliente":"jose2",
      "fecha":"31/08/24",
      "descripcion_orden":"todo bien2",
      "total":10
      }
  ];
   }
   */
   ngOnInit(): void { 
    this.obtenerOrdenes();
  }

  private obtenerOrdenes(){
     this.ordenService.obtenerListaDeOrdenes().subscribe(dato =>{
       this.ordens=dato;
 
     });

     //obtenerListaDeOrdenes
     //this.OrdenService.obtenerListaDeEmpleados().subscribe((dato: any) =>{
     //  this.empleados=dato;
    // });
   }
 
}

