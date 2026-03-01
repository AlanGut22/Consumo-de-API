import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrl: './personajes-list.component.css'
})
export class PersonajesListComponent {
  @Input() personajeList: Personaje[];
}
