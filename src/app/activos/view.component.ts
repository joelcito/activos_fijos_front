import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activo } from './activo';

import swal from 'sweetalert2';

import { ActivoService } from './activo.service';
import { SubGrupoService } from '../sub-grupo/subGrupo.service';
import { RegimenService } from '../regimen/regimen.service';
import { ComponenteService } from '../componente/componente.service';
import { GrupoService } from '../grupos/grupo.service';


import { SubGrupo } from '../sub-grupo/subGrupo';
import { Grupo } from '../grupos/grupo';
import { Componente } from '../componente/componente';
import { Regimen } from '../regimen/regimen';
import { Regional } from '../regional/regional';
import { RegionalService } from '../regional/regional.service';
import { UnidadManejo } from '../unidad-manejo/unidadManejo';
import { UnidadManejoService } from '../unidad-manejo/unidadManejo.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {

  @Input() activo: Activo = new Activo();

  grupos: Grupo[] = [];
  subgrupos: SubGrupo[] = [];
  subGruposBuscados: SubGrupo[] = [];
  componenteByIdSubgrupo: Componente[] = [];
  regimenes: Regimen[] = [];
  regionales: Regional[] = [];
  unidadesManejo: UnidadManejo[] = [];



  // variables
  estadoComponente:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,


    private activoService: ActivoService,
    private subGrupoService: SubGrupoService,
    private componenteService: ComponenteService,
    private grupoService: GrupoService,
    private regimenService: RegimenService,
    private regionalService: RegionalService,
    private unidadManejoService: UnidadManejoService,


  ){

    this.grupoService.getGrupos().subscribe(
      grupos => this.grupos = grupos
    )

    // this.subGrupoService.getSubGrupos().subscribe(
    //   subgrupos => this.subgrupos = subgrupos
    // )

    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];

        this.activoService.getActivo(id).subscribe(
          (activo) => {
            // this.activo = activo
            // console.log(this.activo,activo.grupo.idgrupo)
            // let idg = activo.grupo
            var idg1:string = activo.grupo.idgrupo.toString()
            this.subGrupoService.getSubGruposByIdGrupo(idg1).subscribe(
              subgrupos =>{
                this.subgrupos = subgrupos
                console.log(subgrupos)
              }
            )

            console.log(this.subgrupos)
          }
        )

        // console.log(id);


        // console.log(this.subgrupos)
      }
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

    // this.compararSubGrupo
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
        }else{
          console.log("n che");
        }
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

  buscarSubGrupo($event:any){
    var idgrupo:string = this.activo.grupo.idgrupo.toString();
    this.subGrupoService.getSubGruposByIdGrupo(idgrupo).subscribe(
      subGruposBuscados => this.subGruposBuscados = subGruposBuscados
    )
    this.estadoComponente = false;
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

  compararRegimen(sg1:Regimen, sg2:Regimen):boolean{
    if(sg1 === undefined && sg2 === undefined)
      return true;

    return (sg1 === null || sg2 === null || sg1 === undefined || sg2 === undefined)? false : (sg1.idiregimen === sg2.idiregimen);
  }

  compararRegional(sg1:Regional, sg2:Regional):boolean{
    if(sg1 === undefined && sg2 === undefined)
      return true;

    return (sg1 === null || sg2 === null || sg1 === undefined || sg2 === undefined)? false : (sg1.idiregional === sg2.idiregional);
  }

  compararUnidManejo(sg1:UnidadManejo, sg2:UnidadManejo):boolean{
    if(sg1 === undefined && sg2 === undefined)
      return true;

    return (sg1 === null || sg2 === null || sg1 === undefined || sg2 === undefined)? false : (sg1.idunidadmanejo === sg2.idunidadmanejo);
  }

  editar(){
    swal.fire({
      icon: 'success',
      title: 'Exito!',
      // text: 'El activo '+activo.nombre+' se guardo correcto',
      text: 'Se edito con exito',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}
