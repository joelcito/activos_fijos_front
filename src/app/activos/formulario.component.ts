import { Component, OnInit ,Input} from '@angular/core';
import { Activo } from './activo';
import { ActivoService } from './activo.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
// import { OnInit } from '@angular/core';

// PARA LOS GRUPOAS
import { GrupoService } from '../grupos/grupo.service';
import { Grupo } from '../grupos/grupo';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {

  @Input() activo: Activo = new Activo();

  grupos: Grupo[] = [];

  constructor(
    private activoService: ActivoService,
    private router:Router,
    private activatedRoute: ActivatedRoute,

    private grupoService: GrupoService,

    ){
      this.grupoService.getGrupos().subscribe(
        grupos => this.grupos = grupos
      )
    }

    ngOnInit() {
      this.cargarActivo()
    }

    cargarActivo(): void {
      this.activatedRoute.params.subscribe(
        params => {
          let id = params['id']

          if(id){
            this.activoService.getActivo(id).subscribe(
              (activo) => this.activo = activo
            )
          }
        }
      )
    }

  public create(){
    // console.log("como es che");
    console.log(this.activo);
    this.activoService.create(this.activo).subscribe(
      activo => {
        this.router.navigate(['/activos'])
        swal.fire({
          icon: 'success',
          title: 'Exito!',
          // text: 'El activo '+activo.nombre+' se guardo correcto',
          text: 'Se elimino el activo con exito',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    )
  }

  compararGrupo(g1:Grupo, g2:Grupo):boolean{

    // console.log(g1)
    console.log(g2)

    if(g1 === undefined && g2 === undefined){

      console.log("si es undefined");

      return true;
    }

    console.log("no es undefined");

    return (g1 === null || g2 === null || g1 === undefined || g2 === undefined)? false : (g1.id === g2.id);
  }

}
