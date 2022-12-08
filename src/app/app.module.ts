import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EquipoComponent } from './equipo/equipo.component'

//servicios
import { EquipoService } from './equipo.service';

//rutear componentes
const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'contacto', component: ContactoComponent},
//                :id es una variable para enviar el id
  { path: 'equipo/:id', component: EquipoComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent } // error 404
];

@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    NgIfComponent,
    NgClassComponent,
    EncabezadoComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    PageNotFoundComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Agregar las rutas de los componentes
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
