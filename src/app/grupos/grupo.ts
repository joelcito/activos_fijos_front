import { SubGrupo } from "../sub-grupo/subGrupo";
export class Grupo {
  idgrupo:String= '';
  // subgrupo:SubGrupo = new SubGrupo();
  descripcion:string = "";
  vidaUtil:number = 0;
  estado:string = "";
  nroItems:number = 0;
  fecha:Date = new Date();
  fechacreacion:Date = new Date();
  fechamodificacion:Date = new Date();
}
