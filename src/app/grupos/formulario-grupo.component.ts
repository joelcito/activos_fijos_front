import { Component, Input, OnInit } from '@angular/core';
import { Grupo } from './grupo';
import { GrupoService } from './grupo.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-grupo',
  templateUrl: './formulario-grupo.component.html'
})
export class FormularioGrupoComponent implements OnInit {

  @Input() grupo: Grupo = new Grupo();


  constructor(
    private grupoService: GrupoService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
  ){

  }

  ngOnInit() {
    this.cargarGrupo()
  }

  cargarGrupo():void {
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id'];

      if(id){
        this.grupoService.getGrupo(id).subscribe(
          (grupo) => this.grupo = grupo
        )
      }
    })
  }

  createGrupo(){
    this.grupoService.create(this.grupo).subscribe(grupo => {
      this.router.navigate(['/grupos'])
      swal.fire({
        icon: 'success',
        title: 'Exito!',
        text: 'Se elimino el activo con exito',
      })
    })
  }
}
