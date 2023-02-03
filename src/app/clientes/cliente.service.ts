import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private urlEndPoint: string = "http://localhost:9999/api/cliente";

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    // return CLIENTES;
    return this.http.get(this.urlEndPoint+"/listado").pipe(
      map(response => response as Cliente[])
    );
  }
}
