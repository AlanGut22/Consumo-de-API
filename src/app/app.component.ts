import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personaje } from './interfaces/personaje';
import { map, Subscription } from 'rxjs';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  private _personajes: Personaje[] = [];
  private suscripcion: Subscription;

  get personajes() {
    return this._personajes;
  }

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.suscripcion = this.personajeService
      .getPersonajes()
      .pipe(
        map((personajeList) => {
          return personajeList.items.map((personaje) => {
            return {
              name: personaje.name,
              ki: personaje.ki,
              race: personaje.race,
              maxKi: personaje.maxKi,
              image: personaje.image,
              affiliation: personaje.affiliation,
            };
          });
        }),
      )
      .subscribe({
        next: (data: Personaje[]) => {
          console.log(data);
          this._personajes = data;
        },
        error: () => { },
        complete: () => { },
      });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}