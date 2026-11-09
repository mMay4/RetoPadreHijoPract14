import { Component } from '@angular/core';
import { Curso } from './curso.model';
import { CursoCardComponent } from './curso-card/curso-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CursoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cursos: Curso[] = [
    { id: 1, nombre: 'Introducción a Angular', horas: 20, precio: 120 },
    { id: 2, nombre: 'Fundamentos de TypeScript', horas: 16, precio: 90 },
    { id: 3, nombre: 'Diseño Web con CSS', horas: 24, precio: 150 }
  ];

  inscritos: Curso[] = [];
  total = 0;

  get cantidadInscritos(): number {
    return this.inscritos.length;
  }

  estaInscrito(curso: Curso): boolean {
    return this.inscritos.some((item) => item.id === curso.id);
  }

  inscribir(curso: Curso): void {
    // Validación en el padre: no cobrar dos veces el mismo curso.
    if (this.estaInscrito(curso)) {
      return;
    }
    this.inscritos.push(curso);
    this.total += curso.precio;
  }
}
