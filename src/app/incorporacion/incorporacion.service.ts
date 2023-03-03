import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Grupo } from './grupo';
import { Incorporacion } from './incorporacion';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IncoporacionService {

  private urlEndPoint: string = "http://localhost:9999/api/incorporacion";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  getIncorporaciones():Observable<Incorporacion[]> {
    return this.http.get(this.urlEndPoint+"/listado").pipe(
      map(response => response as Incorporacion[])
    );
  }

  // getGrupos():Observable<Grupo[]>{
  //   return this.http.get(this.urlEndPoint+"/listado").pipe(
  //     map(response => response as Grupo[])
  //   );
  // }

  // getGrupo(id:number):Observable<Grupo>{
  //   return this.http.get<Grupo>(this.urlEndPoint+"/"+id)
  // }

  // create(grupo:Grupo):Observable<Grupo>{
  //   return this.http.post<Grupo>(this.urlEndPoint+"/", grupo, {headers: this.httpHeaders});
  // }

}
