import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css'
})
export class PersonajeCardComponent {
  @Input() personaje!: Personaje;
}
