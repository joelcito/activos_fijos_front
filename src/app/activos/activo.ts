import { Grupo } from "../grupos/grupo";
import { Incorporacion } from "../incorporacion/incorporacion";
import  { Regimen } from "../regimen/regimen";
import { Regional } from "../regional/regional";
import { UnidadManejo } from "../unidad-manejo/unidadManejo";
import { TipoTransaccion } from "../tipo-transaccion/tipoTransaccion";
import { UbicacionEspecifica } from "../ubicacion-especifica/ubicacionEspecifica";
import { SubGrupo } from "../sub-grupo/subGrupo";

export class Activo {

  idactivo:string = '';
  descripcion:string = '';
  incorporacion:Incorporacion = new Incorporacion();
  grupo:Grupo = new Grupo();
  subgrupo:SubGrupo = new SubGrupo();
  regimen:Regimen = new Regimen();
  regional:Regional = new Regional();
  unidadmanejo:UnidadManejo = new UnidadManejo();
  // tipotransaccion:TipoTransaccion = new TipoTransaccion();  //ojo piojo
  tipotransaccion:null = null;  //ojo piojo
  // ubicacionespecifica:UbicacionEspecifica = new UbicacionEspecifica();//ojo
  ubicacionespecifica:null = null;//ojo
  codigo:string = '';
  placa:string = '';
  fecha:Date = new Date();//auto
  eficiencia:string = '';
  codigoalterno:string = '';//ojo piojo
  formainicial:string = '';
  estadoregistro:string = '';
  estado:string = '';//ojo piojo
  fechacompra:Date = new Date();
  porcentaje_depreciacion:number = 0 ;
  ufv:number = 0 ;
  ufvcompra:number = 0 ;//ojo piojo
  vida_util:number = 0 ;
  fechacreacion:Date = new Date();
  fechamodificacion:Date = new Date();




  // codigo_item:string = '';
  // departameto:string = '';
  // fecha_compra:string = '';
  // ufv_inicio:string  = '';
  // rubro:String ='';
  // tipo_cuenta:String ='';
  // tipo_incorporacion:String ='';
  // tipo_regimen:String ='';
  // tipo_modelo:String ='';
  // tipo_marca:String ='';
  // tipo_activo:String ='';
  // numero_serie:String ='';
  // ufv_compra:String ='';
  // ubicacion_general:String ='';
  // ubicacion_especifica:String ='';

}
