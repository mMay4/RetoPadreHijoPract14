import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-curso-card',
  standalone: true,
  templateUrl: './curso-card.html',
  styleUrl: './curso-card.css'
})
export class CursoCardComponent {
  @Input({ required: true }) curso!: Curso;
  @Input() inscrito = false;
  @Output() inscribirse = new EventEmitter<Curso>();

  alInscribirse(): void {
    if (!this.inscrito) {
      this.inscribirse.emit(this.curso);
    }
  }
}
