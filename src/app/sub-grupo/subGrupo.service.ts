import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Grupo } from './grupo';
import { map } from 'rxjs/operators';
import { SubGrupo } from './subGrupo';

@Injectable({
  providedIn: 'root'
})

export class SubGrupoService {

  private urlEndPoint: string = "http://localhost:9999/api/subGrupo";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  getSubGrupos():Observable<SubGrupo[]>{
    return this.http.get(this.urlEndPoint+"/listado").pipe(
      map(response => response as SubGrupo[])
    );
  }

  getSubGruposByIdGrupo(id:string):Observable<SubGrupo[]>{
    return this.http.get(this.urlEndPoint+"/byGrupo/"+id).pipe(
      map(response => response as SubGrupo[])
    );
  }

  // getGrupo(id:number):Observable<Grupo>{
  //   return this.http.get<Grupo>(this.urlEndPoint+"/"+id)
  // }

  // create(grupo:Grupo):Observable<Grupo>{
  //   return this.http.post<Grupo>(this.urlEndPoint+"/", grupo, {headers: this.httpHeaders});
  // }

}
