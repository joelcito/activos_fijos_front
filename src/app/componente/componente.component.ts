import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { Componente } from './componente';
import { ComponenteService } from './componente.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit{

  componentes: Componente[] = [];
  subGrupoNombre:String = '';

  constructor(
    private componenteService: ComponenteService,
    private activatedRoute: ActivatedRoute,

  ){
    this.listadoComponentes()
  }

  ngOnInit() {

  }

  listadoComponentes(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.componenteService.getComponeteByIdSubGrupo(id).subscribe(
          (componentes) => {
            this.componentes = componentes
          }
        )
      }
    })
  }



}
