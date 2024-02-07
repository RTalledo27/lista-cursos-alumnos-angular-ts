import { Component, OnInit } from '@angular/core';
import { Alumnos } from './mock';
import {CommonModule} from '@angular/common';
import { Alumno } from '../models/alumno-to';


@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit {
  public alumnos?: Alumno[]

  ngOnInit(){
    this.alumnos = Alumnos
  }
}
