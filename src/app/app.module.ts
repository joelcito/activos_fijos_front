import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';

// CLASES DE SERVICIIO
import { ClienteService } from './clientes/cliente.service';
import { ActivoService } from './activos/activo.service';

// IMPORTAMOS PARA EL API
import { HttpClientModule } from '@angular/common/http';


// COMPONENTES
import { AppComponent } from './app.component';
import { ActivosComponent } from './activos/activos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormularioComponent } from './activos/formulario.component';
// import { LoginComponent } from './login/login.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { GruposComponent } from './grupos/grupos.component';
import { FormularioGrupoComponent } from './grupos/formulario-grupo.component';


// LAS RUTAS
import { Routes, RouterModule } from '@angular/router';

// FORMULARIOS
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './usuarios/login.component';

const routes: Routes = [
  // ACTIVOS
  // {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path: '',redirectTo: '/activos', pathMatch: 'full'},
  // {path: 'login', component:LoginComponent},
  {path: 'personas', component:ClientesComponent},
  {path: 'activos', component:ActivosComponent},
  {path: 'activos/formulario', component:FormularioComponent},
  {path: 'activos/formulario/:id', component:FormularioComponent},
  {path: 'departamentos', component:DepartamentosComponent},

  // GRUPOS
  {path: 'grupos', component:GruposComponent},
  {path: 'grupos/formulario', component:FormularioGrupoComponent},
  {path: 'grupos/formulario/:id', component:FormularioGrupoComponent},

  // LOGIN
  {path: 'login', component:LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientesComponent,
    ActivosComponent,
    FormularioComponent,
    LoginComponent,
    DepartamentosComponent,
    GruposComponent,
    FormularioGrupoComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClienteService,
    // ActivoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
