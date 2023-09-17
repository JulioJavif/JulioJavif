import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: {
    nombre: string,
    descripcion: string,
    tecnology: string[]
  }[] = [
    {
      nombre: 'Prueba 1',
      descripcion: 'Prueba 1 desc',
      tecnology: ['fa fa-angular']
    },
    {
      nombre: 'Prueba 2',
      descripcion: 'Prueba 2 desc',
      tecnology: ['fa fa-angular', 'fa fa-java']
    },
    {
      nombre: 'Prueba 3',
      descripcion: 'Prueba 3 desc',
      tecnology: ['fa fa-angular']
    },
    {
      nombre: 'Prueba 4',
      descripcion: 'Prueba 4 desc',
      tecnology: ['fa fa-angular']
    },
    {
      nombre: 'Prueba 5',
      descripcion: 'Prueba 5 desc',
      tecnology: ['fa fa-angular', 'fa fa-java']
    },
    {
      nombre: 'Prueba 6',
      descripcion: 'Prueba 6 desc',
      tecnology: ['fa fa-angular']
    },
    {
      nombre: 'Prueba 7',
      descripcion: 'Prueba 7 desc',
      tecnology: ['fa fa-angular', 'fa fa-java']
    },
    {
      nombre: 'Prueba 8',
      descripcion: 'Prueba 8 desc',
      tecnology: ['fa fa-angular', 'fa fa-java']
    },
    {
      nombre: 'Prueba 9',
      descripcion: 'Prueba 9 desc',
      tecnology: ['fa fa-angular']
    },
    {
      nombre: 'Prueba 10',
      descripcion: 'Prueba 0 desc',
      tecnology: ['fa fa-angular']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
