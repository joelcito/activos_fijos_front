import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { SubGrupo } from './subGrupo';


import { SubGrupoService } from './subGrupo.service';

@Component({
  selector: 'app-sub-grupo',
  templateUrl: './sub-grupo.component.html',
})
export class SubGrupoComponent implements OnInit {

  subgrupos: SubGrupo[] = [];
  nombreGrupo:String  = ''

  constructor(
    private subGrupoService: SubGrupoService,
    private activatedRoute: ActivatedRoute,

  ){

  }

  ngOnInit() {
    this.listadoSubGrupos()
  }

  listadoSubGrupos(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.subGrupoService.getSubGruposByIdGrupo(id).subscribe(
          (subgrupos) => {
            this.subgrupos = subgrupos
            if(subgrupos.length > 0){
              this.nombreGrupo = subgrupos[0].grupo.descripcion
            }
          }
        )
      }
    })
  }

}
