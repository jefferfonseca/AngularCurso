import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo: any[] = [
    {
      nombre: "Jeffer",
      esp: "Full stack",
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti odit itaque dignissimos odio, officia adipisci dolorum repudiandae molestias? Ipsam qui officia eligendi culpa, fugit tempore placeat cum harum molestias!'
    },
    {
      nombre: "Dani",
      esp: "CSS",
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti odit itaque dignissimos odio, officia adipisci dolorum repudiandae molestias? Ipsam qui officia eligendi culpa, fugit tempore placeat cum harum molestias!'
    }
  ]
  constructor() {
    // console.log('Funcionando');
  }
  obtenerEquipo() {
    return this.equipo;
  }
  obtenerDescripcion(i:number) {
    return this.equipo[i];
  }
}
