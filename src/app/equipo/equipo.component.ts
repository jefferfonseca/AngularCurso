import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from './../equipo.service'

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo: any[] = [];
  id: string = "";

  constructor(private ruta: ActivatedRoute, private _servicio: EquipoService) {
    //forma de pro de leer la url params dentro de subscribe es una variable params['id'] id es el nombre de la variable que llegar por url
    this.ruta.params.subscribe(params => {
      this.equipo = [this._servicio.obtenerDescripcion(Number(params['id']))]
    });
  }

  ngOnInit() {
    //una forma de leer la url
    // this.id = this.ruta.snapshot.params['id'].toString();
    // this.equipo=[this._servicio.obtenerDescripcion(Number(this.id))];

  }
}
