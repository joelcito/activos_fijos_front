import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Grupo } from './grupo';
import { map } from 'rxjs/operators';
import { UnidadManejo } from './unidadManejo';

@Injectable({
  providedIn: 'root'
})

export class UnidadManejoService {

  private urlEndPoint: string = "http://localhost:9999/api/unidadManejo";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  getUnidadManejos():Observable<UnidadManejo[]>{
    return this.http.get(this.urlEndPoint+"/listado").pipe(
      map(response => response as UnidadManejo [])
    );
  }



  // getComponeteByIdSubGrupo(id:string): Observable<Regimen[]>{
  //   return this.http.get(this.urlEndPoint+"/getComponeteByIdSubGrupo/"+id).pipe(
  //     map(response => response as Regimen[])
  //   )
  // }

  // getSubGrupos():Observable<SubGrupo[]>{
  //   return this.http.get(this.urlEndPoint+"/listado").pipe(
  //     map(response => response as SubGrupo[])
  //   );
  // }

  // getSubGruposByIdGrupo(id:string):Observable<SubGrupo[]>{
  //   return this.http.get(this.urlEndPoint+"/byGrupo/"+id).pipe(
  //     map(response => response as SubGrupo[])
  //   );
  // }

  // getGrupo(id:number):Observable<Grupo>{
  //   return this.http.get<Grupo>(this.urlEndPoint+"/"+id)
  // }

  // create(grupo:Grupo):Observable<Grupo>{
  //   return this.http.post<Grupo>(this.urlEndPoint+"/", grupo, {headers: this.httpHeaders});
  // }

}
