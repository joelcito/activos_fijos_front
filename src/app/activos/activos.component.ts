import { Component } from '@angular/core';
import { Activo } from './activo';
import { ActivoService } from './activo.service';
import swal from 'sweetalert2';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
})
export class ActivosComponent {

  activos: Activo[] = [];

  // activoSeleccionado: Activo;

  constructor(
    private activoService: ActivoService,
    private modalService: ModalService,
  ){}

  ngOnInit() {
    this.activoService.getActivos().subscribe(
      activos => this.activos = activos
    );
  }

  delete(activo: Activo):void{

    swal.fire({
      title: 'Esta seguro de eliminar el activo?',
      text: "No podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        var id:string =  activo.idactivo.toString();

        this.activoService.delete(id).subscribe(

          response =>{

            // para actualizar la lista
            this.activos = this.activos.filter(act => act !== activo)

            swal.fire(
              'Eliminado!',
              'El activo se elimino con exito.',
              'success'
            )

          }
        )
      }
    })
  }

  // abrirModal(activo:Activo):{
  //   this.activoSeleccionado = activo;
  // }

}
