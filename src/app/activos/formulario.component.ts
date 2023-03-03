import { Component, OnInit ,Input} from '@angular/core';
import { ActivoService } from './activo.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
// import { OnInit } from '@angular/core';

// SERVICES
import { GrupoService } from '../grupos/grupo.service';
import { IncoporacionService } from '../incorporacion/incorporacion.service';
import { SubGrupoService } from '../sub-grupo/subGrupo.service';
import { ComponenteService } from '../componente/componente.service';
import { RegimenService } from '../regimen/regimen.service';
import { RegionalService } from '../regional/regional.service';
import { UnidadManejoService } from '../unidad-manejo/unidadManejo.service';


// MODELS
import { Activo } from './activo';
import { Grupo } from '../grupos/grupo';
import { Incorporacion } from '../incorporacion/incorporacion';
import { SubGrupo } from '../sub-grupo/subGrupo';
import { Componente } from '../componente/componente';
import { Regimen } from '../regimen/regimen';
import { Regional } from '../regional/regional';
import { UnidadManejo } from '../unidad-manejo/unidadManejo';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {

  @Input() activo: Activo = new Activo();
  @Input() componente: Componente = new Componente();

  // arrays
  grupos: Grupo[] = [];
  incorporaciones: Incorporacion[] = [];
  subgrupos: SubGrupo[] = [];
  subGruposBuscados: SubGrupo[] = [];
  componenteByIdSubgrupo: Componente[] = [];
  regimenes: Regimen[] = [];
  regionales: Regional[] = [];
  unidadesManejo: UnidadManejo[] = [];

  // variables
  estadoComponente:boolean = false;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,

    private activoService: ActivoService,
    private grupoService: GrupoService,
    private incopracionService: IncoporacionService,
    private subGrupoService: SubGrupoService,
    private componenteService: ComponenteService,
    private regimenService: RegimenService,
    private regionalService: RegionalService,
    private unidadManejoService: UnidadManejoService,

    ){
      this.grupoService.getGrupos().subscribe(
        grupos => this.grupos = grupos
      )

      this.incopracionService.getIncorporaciones().subscribe(
        incorporaciones => this.incorporaciones = incorporaciones
      )

      this.subGrupoService.getSubGrupos().subscribe(
        subgrupos => this.subgrupos = subgrupos
      )

      this.regimenService.getRegimenes().subscribe(
        regimenes => this.regimenes = regimenes
      )

      this.regionalService.getRegionales().subscribe(
        regionales => this.regionales = regionales
      )

      this.unidadManejoService.getUnidadManejos().subscribe(
        unidadesManejo => this.unidadesManejo = unidadesManejo
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

          console.log(this.activo)
        }
      }
    )
  }

  public create(){
    // console.log("como es che");
    console.log(this.activo);
    console.log(this.componente);

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
    // console.log(g2)

    if(g1 === undefined && g2 === undefined){

      // console.log("si es undefined");

      return true;
    }

    // console.log("no es undefined");

    return (g1 === null || g2 === null || g1 === undefined || g2 === undefined)? false : (g1.idgrupo === g2.idgrupo);
  }

  compararIncorporacion(i1:Incorporacion, i2:Incorporacion):boolean{
    if(i1 === undefined && i2 === undefined)
      return true;

    return (i1 === null || i2 === null || i1 === undefined || i2 === undefined)? false : (i1.idincorporacion === i2.idincorporacion);
  }

  compararSubGrupo(sg1:SubGrupo, sg2:SubGrupo):boolean{
    if(sg1 === undefined && sg2 === undefined)
      return true;

    return (sg1 === null || sg2 === null || sg1 === undefined || sg2 === undefined)? false : (sg1.idsubgrupo === sg2.idsubgrupo);
  }

  cargaComponente($event:any){
    var idsubgrupo:string = this.activo.subgrupo.idsubgrupo.toString();
    this.componenteService.getComponeteByIdSubGrupo(idsubgrupo).subscribe(
      componenteByIdSubgrupo => this.componenteByIdSubgrupo = componenteByIdSubgrupo
    )

    this.estadoComponente = true;
  }

  buscarSubGrupo($event:any){
    var idgrupo:string = this.activo.grupo.idgrupo.toString();
    this.subGrupoService.getSubGruposByIdGrupo(idgrupo).subscribe(
      subGruposBuscados => this.subGruposBuscados = subGruposBuscados
    )
    this.estadoComponente = false;
  }

}
