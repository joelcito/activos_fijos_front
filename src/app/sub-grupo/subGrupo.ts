import { Grupo } from "../grupos/grupo";

export class SubGrupo {
  idsubgrupo:String = '';
  grupo:Grupo = new Grupo();
  descripcion:string = "";
  fecha:Date = new Date();
  fechacreacion:Date = new Date();
  fechamodificacion:Date = new Date();
}
