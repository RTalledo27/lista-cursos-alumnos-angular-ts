import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnosComponent } from "./tabla-alumnos/tabla-alumnos.component";
import { TablaCursosComponent } from "./tabla-cursos/tabla-cursos.component";
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TablaAlumnosComponent, TablaCursosComponent]
})
export class AppComponent {
  cursos: boolean = true;
  handleCambio(){
    this.cursos = !this.cursos
  }
  
}
