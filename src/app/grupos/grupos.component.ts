import { Component } from '@angular/core';
import { Grupo } from './grupo';
import { GrupoService } from './grupo.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html'
})
export class GruposComponent {

  grupos: Grupo[] = [];

  constructor(
    private grupoService: GrupoService,
  ){}

  ngOnInit(){
    this.grupoService.getGrupos().subscribe(
      grupos => this.grupos = grupos
    );
  }

}
