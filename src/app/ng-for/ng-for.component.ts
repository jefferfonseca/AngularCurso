import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  title = '[ngFor]';
  cursos:string[] = ['HTML', 'ANGULAR', 'PHP'];

  // Array de objetos
  // tipo, nombre y edad son atributos del objeto
  // [] sirve apra crear arrays <> define el tipo de objeto que es y {} crean el objeto
  animales:Array<any> = [
    {tipo: 'Perro', nombre: 'Lisa', edad: 10},
    {tipo: 'Gato', nombre: 'Pepon', edad: 2},
    {tipo: 'Pato', nombre: 'TanTan', edad: 7}
  ]
}
