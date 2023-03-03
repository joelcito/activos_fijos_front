
import { SubGrupo } from "../sub-grupo/subGrupo";

export class Componente {

  idcomponente:String = '';
  subgrupo:SubGrupo = new SubGrupo();
  nombre:String = '';
  estado:String = '';
  fecha:Date = new Date();
  fechacreacion:Date = new Date();
  fechamodificacion:Date = new Date();

}
